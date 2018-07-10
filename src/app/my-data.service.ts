import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }
  obj = {
    id: 1,
    name: "Vishnu Jayan",
    company: "Travancore analytics p ltd"
  };

  success=function() {
    return "Successfull";
  };

  fetchData = function() {
    this.http.get("src/data/student.json").subscribe(
      (data)=> console.log(data)
    )
  }
}   
