import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup:FormGroup;
  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('',[ Validators.required]),
      surname: new FormControl('', [Validators.required]),
      fathername: new FormControl('', [Validators.required]),
      birthdate: new FormControl('',[Validators.required]),
      familyAddress: new FormControl('', [Validators.required]),
      regionId: new FormControl(0,[Validators.required])
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

}
