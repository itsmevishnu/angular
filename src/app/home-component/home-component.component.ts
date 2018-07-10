import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  obj = {
    title: "Angular",
    description: "Angular is a wonderful front end framework"
  };

  array = ["Google", "Microsoft", "Facebook", "Oracle"];

  isTrue = true;
}
