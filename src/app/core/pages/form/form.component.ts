import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';

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
      name: ['', Validators.required],
      surname: ['', Validators.required],
      fathername: ['', Validators.required],
      birthdate: ['', Validators.required],
      familyAddress: ['', Validators.required],
      regionId: ['', Validators.required],
      contactInfo: ['', Validators.required],
      fin: ['', Validators.required],
      identityPhotoId: ['', Validators.required],
      rewards: this.fb.array([this.initRewardsItem()]),
      children: this.fb.array([this.initChildrenItem()]),
      apartments: this.fb.array([this.initApartmentsItem()])
    })
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
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

  addNewReward() {
    this.rewardsArr.push(this.initRewardsItem());
    console.log(this.rewardsArr);
  }
  addChild() {
    this.childrenArr.push(this.initChildrenItem());
  }

  onFileChange($event) {
    let file = $event.target.files[0];
    console.log(file);
    this.formGroup.controls['identityPhotoId'].setValue(file ? file.name : '');
    this.fileName = file.name;
    console.log(this.formGroup.controls['identityPhotoId'].value);
 }

}
