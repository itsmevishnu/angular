import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [ {
          "company": "PITS",
          "email": "hakkim.pa@pitsolutions.com",
          "name": "Hakkim"
        },
        {
          "company": "Finastra",
          "email": "jijo@finanstra.com",
          "name": "Jijo"
        },
        {
          "company": "Travancore Analytics P Ltd",
          "email": "vishnujayadhevan@yahoo.com",
          "name": "Vishnu Jayan"
        },
        {
          "company": "Navigant",
          "email": "vivak2019@gmail.com",
          "name": "Vivak Kumar"
      }];
  constructor() { }

  ngOnInit() {
    
  }
}
