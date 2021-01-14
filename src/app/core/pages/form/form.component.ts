import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup:FormGroup;
  initForm(){
    // this.formGroup = this.formBuilder.group({
    //   name: new FormControl('',[ Validators.required]),
    //   surname: new FormControl('', [Validators.required]),
    //   fathername: new FormControl('', [Validators.required]),
    //   birthdate: new FormControl('',[Validators.required]),
    //   familyAddress: new FormControl('', [Validators.required]),
    //   regionId: new FormControl(0,[Validators.required]),
    //   contactInfo: new FormControl('',[Validators.required]),
    //   fin: new FormControl('',[Validators.required]),
    //   identityPhotoId: new FormControl('',[Validators.required]),
    // })

    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      fathername: ['', Validators.required],
      birthdate: ['', Validators.required],
      familyAddress: ['', Validators.required],
      regionId: ['', Validators.required],
      contactInfo: ['', Validators.required],
      fin: ['', Validators.required],
      identityPhotoId: ['', Validators.required]
    })
  }

  fileName = '';

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
  }

  onFileChange($event) {
    let file = $event.target.files[0]; // <--- File Object for future use.
    console.log(file);
    this.formGroup.controls['identityPhotoId'].setValue(file ? file.name : ''); // <-- Set Value for Validation
    this.fileName = file.name;
    console.log(this.formGroup.controls['identityPhotoId'].value);
}

}
