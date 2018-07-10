import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  form;

  ngOnInit(){
    this.form = new FormGroup({
      firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
      ]),
      lastname: new FormControl(""),
      language: new FormControl("", this.textValidator)
    });
  } 
  textValidator=function(control) {
    console.log(control);
    if(control.value.length<3) {
      return {'lastname': true}
    }
  }
  onSubmit=function(user) {
    console.log(user);
  }
}
