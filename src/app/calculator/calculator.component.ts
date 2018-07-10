import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  weight= 0;
  height=0;
  bmi = 0;
  bmiCalc = function(){
    if(this.height == 0) {
      this.bngmi=0;
    } else {
      var h = this.height / 100;
      this.bmi = (this.weight / (h * h)).toFixed(2);
    }
  }
}
