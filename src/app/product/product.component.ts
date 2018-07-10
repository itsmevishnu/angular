import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = ["Iphone 7", "Iphone 7 plus", "Macbook Air"];
  newItem = "";
  pushItem = function() {
    if(this.newItem != "") {
      this.items.push(this.newItem);
    }
    this.newItem = "";
  }

  deleteItem = function(index) {
    this.items.splice(index,1);// remove one item from the index.
  }
}
