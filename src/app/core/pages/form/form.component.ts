import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';

import {formatDate} from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup:FormGroup;
  fileName = '';
  initForm(){
    this.formGroup = this.fb.group({
      name: ['', [Validators.maxLength(50), Validators.minLength(2)]],
      surname: ['', [Validators.maxLength(50), Validators.minLength(2)]],
      fathername: ['', [Validators.maxLength(50), Validators.minLength(2)]],
      birthdate: [''],
      familyAddress: ['', [Validators.maxLength(250), Validators.minLength(2)]],
      regionId: ['', [Validators.min(0)]],
      dateOfMartyrdomOrVeteran: [''],
      contactInfo: ['', [Validators.maxLength(250), Validators.minLength(1)]],
      fin: ['', [Validators.maxLength(7), Validators.minLength(7)]],
      identityPhotoId: [''],
      rewards: this.fb.array([this.initRewardsItem()]),
      children: this.fb.array([this.initChildrenItem()]),
      apartments: this.fb.array([this.initApartmentsItem()])
    })
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.photos[0]['controls'].photos.value);
    console.log(this.name);
    // this.dateFormat(this.birthdate);
  }

  initRewardsItem() {
    return this.fb.group({
      name: [''],
      date:['']
    });
  }

  initChildrenItem(){
    return this.fb.group({
      name:[''],
      surname: [''],
      fin: [''],
      birthdate: [''],
      gender: [0],
      identityPhotoId: ['']
    });
  }

  initApartmentsItem(){
    return this.fb.group({
      peopleCount:[0],
      totalArea: [0],
      roomCount: [0],
      hasDocument: [false],
      photos:this.fb.array([this.initApartmentPhoto()])
    });
  }
  initApartmentPhoto(){
    return this.fb.group({
      photoId:['']
    });
  }


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

  // get form data
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
    return this.formGroup.get('regionId').value;
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
    console.log(formattedDate);
    return formattedDate;
  }

  addNewReward() {
    this.rewardsArr.push(this.initRewardsItem());
    console.log(this.rewardsArr);
  }
  addChild() {
    this.childrenArr.push(this.initChildrenItem());
  }
  addApartment(){
    this.apartmentArr.push(this.initApartmentsItem());
  }

  onFileChange($event) {
    let file = $event.target.files[0];
    this.formGroup.controls['identityPhotoId'].setValue(file ? file.name : '');
    // this.fileName = file.name;
    console.log(this.formGroup.controls['identityPhotoId'].value);
 }


 getFormData(){
    const data = {
      name: this.name,
      surname: this.surname,
      fathername: this.fathername,
      birthdate: this.dateFormat(this.birthdate),
      familyAddress: this.familyAddress,
      regionId: this.regionId,
      dateOfMartyrdomOrVeteran: this.dateFormat(this.dateOfMartyrdomOrVeteran),
      contactInfo: this.contactInfo,
      fin: this.fin,
      identityPhotoId: this.identityPhotoId,
      rewards: this.rewardsArr.value,
      children: this.childrenArr.value,
      apartments: this.apartmentArr.value
    }

    console.log(data);
  
 }

}
