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
      rewards: this.fb.array([this.initRewardsItem()])
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


  get rewardsArr() {
    return this.formGroup.get('rewards') as FormArray;
  }

  addNewRow() {
    this.rewardsArr.push(this.initRewardsItem());
  }

  onFileChange($event) {
    let file = $event.target.files[0];
    console.log(file);
    this.formGroup.controls['identityPhotoId'].setValue(file ? file.name : '');
    this.fileName = file.name;
    console.log(this.formGroup.controls['identityPhotoId'].value);
 }

}
