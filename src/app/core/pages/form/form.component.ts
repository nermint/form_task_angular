import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';

import { formatDate } from '@angular/common';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';
import { Region } from '../../shared/models/region';
import { FormData } from '../../shared/models/form';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup:FormGroup;
  regions:Region[];
  photoId:string;
  initForm(){
    this.formGroup = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
      surname: ['', [Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
      fathername: ['', [Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
      birthdate: ['',[Validators.required]],
      familyAddress: ['', [Validators.required,Validators.maxLength(250), Validators.minLength(2)]],
      regionId: ['', [Validators.min(0)]],
      dateOfMartyrdomOrVeteran: ['',[Validators.required]],
      contactInfo: ['', [Validators.required,Validators.maxLength(250), Validators.minLength(1)]],
      fin: ['', [Validators.maxLength(7), Validators.minLength(7)]],
      identityPhotoId: [''],
      rewards: this.fb.array([this.initRewardsItem()]),
      children: this.fb.array([this.initChildrenItem()]),
      apartments: this.fb.array([this.initApartmentsItem()])
    })
  }

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initForm();
    this.getRegions();
  }

  initRewardsItem() {
    return this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(1000), Validators.minLength(1)]],
      date:['',[Validators.required]]
    });
  }

  initChildrenItem(){
    return this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
      surname: ['',[Validators.required,Validators.maxLength(50), Validators.minLength(2)]],
      fin: ['',[Validators.maxLength(7)]],
      birthdate: ['',[Validators.required]],
      gender: [1],
      identityPhotoId: ['']
    });
  }

  initApartmentsItem(){
    return this.fb.group({
      peopleCount:['',[Validators.required,Validators.min(0)]],
      totalArea: ['',[Validators.required,Validators.min(0)]],
      roomCount: ['',[Validators.required,Validators.min(0)]],
      hasDocument: [false,[Validators.required,]],
      photos:this.fb.array([])
    });
  }
  
  // get form data
  get rewardsArr() {
    return this.formGroup.get('rewards') as FormArray;
  }
  get childrenArr() {
    return this.formGroup.get('children') as FormArray;
  }
  
  get apartmentArr() {
    return this.formGroup.get('apartments') as FormArray;
  }
  get photos(){
    return (this.formGroup.get('apartments') as FormArray).controls;
  }

  get name(){
    return this.formGroup.get('name').value;
  }
  get surname(){
    return this.formGroup.get('surname').value;
  }
  get fathername(){
    return this.formGroup.get('fathername').value;
  }
  get birthdate(){
    return this.formGroup.get('birthdate').value;
  }
  get familyAddress(){
    return this.formGroup.get('familyAddress').value;
  }
  get regionId(){
    return +this.formGroup.get('regionId').value;
  }
  get dateOfMartyrdomOrVeteran(){
    return this.formGroup.get('dateOfMartyrdomOrVeteran').value;
  }
  get contactInfo(){
    return this.formGroup.get('contactInfo').value;
  }
  get fin(){
    return this.formGroup.get('fin').value;
  }
  get identityPhotoId(){
    return this.formGroup.get('identityPhotoId').value;
  }

  

  dateFormat(date){
    const format = 'yyyy-MM-ddTHH:mm:ss.SSSSSSS';
    const locale = 'en-US';
    let formattedDate='';
    if(date){
      formattedDate = formatDate(date, format, locale);
    }
    return formattedDate;
  }

  addNewReward() {
    this.rewardsArr.push(this.initRewardsItem());
  }
  addChild() {
    this.childrenArr.push(this.initChildrenItem());
  }
  addApartment(){
    this.apartmentArr.push(this.initApartmentsItem());
  }

  deleteReward(index: number){
    this.rewardsArr.removeAt(index);
  }
  deleteChild(index: number){
    this.childrenArr.removeAt(index);
  }
  deleteApartment(index: number){
    this.apartmentArr.removeAt(index);
  }

  getRegions(){
    this.formService.getRegions().subscribe(data =>{
      this.regions = data['regions'];
    });
  }


  onFileChange($event, fileContain,i?) {

    if($event.target.files.length > 0) 
     {
      let file;
      for(let index = 0; index < $event.target.files.length; index++){
        file = $event.target.files[index];
      
      const formData = new FormData();
      formData.append('file', file);

      this.formService.uploadPhoto(formData).subscribe( data =>{
        this.photoId = data.id;
        switch(fileContain){
          case 'personalInfo':
            this.formGroup.get('identityPhotoId').setValue(this.photoId ? this.photoId : '');
            break;
          case 'childrenInfo':
              this.childrenArr.value[i].identityPhotoId = this.photoId;
            // console.log(this.childrenArr.value);
            break;
          case 'apartmentInfo':
            let multipleFile: string[] =[];
            multipleFile.push(this.photoId);
            for(let index = 0; index < multipleFile.length; index++){
              this.apartmentArr.value[i].photos.push({photoId: multipleFile[index]})
            }
            //}
            // console.log(this.apartmentArr.value);
          default: 
            break;
        }
      });

    }

     }
 }


  getRewards(rewards){
    rewards.forEach(element => {
        element.date = this.dateFormat(element.date);
    });
      
    return rewards;
  }
  getChildren(children){
    children.forEach(element => {
      element.birthdate = this.dateFormat(element.birthdate);
    });
    
    return children;
  }




 getFormData(){
    const data:FormData = {
      name: this.name ? this.name: '',
      surname: this.surname,
      fathername: this.fathername,
      birthdate: this.dateFormat(this.birthdate),
      familyAddress: this.familyAddress,
      regionId: this.regionId,
      dateOfMartyrdomOrVeteran: this.dateFormat(this.dateOfMartyrdomOrVeteran),
      contactInfo: this.contactInfo,
      fin: this.fin,
      identityPhotoId: this.identityPhotoId,
      rewards: this.getRewards(this.rewardsArr.value),
      children: this.getChildren(this.childrenArr.value),
      apartments: this.apartmentArr.value
    }

   

    console.log(data);
    
    return data;
 }

  sendFormData(){
    const formData = this.getFormData();
    console.log(formData);
    if(this.formGroup.valid){
      this.formService.postFormData(formData).subscribe( data =>{
        console.log(data);
        this.router.navigate(['/success']);
      });
    }
  } 



}
