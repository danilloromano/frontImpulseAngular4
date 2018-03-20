import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { error } from 'util';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products:Object[] = [];

  constructor(http:Http) { 

    http
    .get('http://localhost:8080/productData')
    .map(res => res.json())
    .subscribe(products => {
      this.products = products;
      console.log(this.products);
    },error => console.log(error))
  }

  ngOnInit() {
  }

}
