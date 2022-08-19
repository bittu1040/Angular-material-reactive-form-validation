import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
})
export class SlideToggleOverviewExample {
  title = 'setValidators';
  myform:FormGroup;
 
  notifyOptions = ["Email" ,"SMS"]
 
  constructor(private fb: FormBuilder) {
 
    this.myform = this.fb.group({
      email: new FormControl(''),
      mobile: new FormControl(''),
      notifyVia: new FormControl('',Validators.required),
    });
 
    this.myform.get("notifyVia").valueChanges
      .subscribe(data=> {
        this.changeValidators()
      })
  }
 
 
  changeValidators() {
    
    console.log(this.myform.get("notifyVia").value)
 
    if (this.myform.get("notifyVia").value=="Email") {
      this.myform.controls["email"].setValidators([Validators.required,Validators.email]);
      this.myform.controls["mobile"].clearValidators();
    } else {
      this.myform.controls["email"].clearValidators();
      this.myform.controls["mobile"].setValidators([Validators.required,Validators.minLength(10)]);
    }
 
    this.myform.get("email").updateValueAndValidity();
    this.myform.get("mobile").updateValueAndValidity();
 
       
  }
}
 