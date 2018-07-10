import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      oct: new FormControl(""),
      hex: new FormControl("")
    });
  }
  binary = 0;
  octal = 0;
  hex = 0;
  decimalChanged = function(oldValue:any,newValue:any) {
    if(newValue == "") {
      this.form.patchValue({ binary: ""});
      this.form.patchValue({ oct: "" });
      this.form.patchValue({ hex: "" });
    } else {
      this.form.patchValue({ binary: parseInt(newValue, 10).toString(2) });
      this.form.patchValue({ oct: parseInt(newValue, 10).toString(8) });
      this.form.patchValue({ hex: parseInt(newValue, 10).toString(16) });
    }
    
  };

  // binaryChanged = function(oldValue:any, newValue:any) {
  //   this.binary = this.binary+1;
  //   if (newValue == "") {
  //     this.form.patchValue({ decimal: "" });
  //     this.form.patchValue({ oct: "" });
  //     this.form.patchValue({ hex: "" });
  //   } else if (this.binary == 1) {
  //     this.form.patchValue({ decimal: parseInt(newValue, 2).toString(10) });
  //   }
  //     this.binary=0;
  // };
  // octChanged = function (oldValue: any, newValue: any) {
  //   this.oct =this.oct + 1;
  //   if (newValue == "") {
  //     this.form.patchValue({ binary: "" });
  //     this.form.patchValue({ decimal: "" });
  //     this.form.patchValue({ hex: "" });
  //   } else if(this.oct == 1) {
  //     this.form.patchValue({ decimal: parseInt(newValue, 8).toString(10) });
  //   }
  //   this.oct=0;
  // };
  // hexChanged = function (oldValue: any, newValue: any) {
  //   this.hex = this.hex+1;
  //   if (newValue == "") {
  //     this.form.patchValue({ binary: "" });
  //     this.form.patchValue({ oct: "" });
  //     this.form.patchValue({ decimal: "" });
  //   } else if(this.hex == 1){
  //     this.form.patchValue({ decimal: parseInt(newValue, 16).toString(10) });
  //   }
  //   this.hex = 0;
  // };

}
