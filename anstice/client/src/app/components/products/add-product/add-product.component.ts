import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product[];

  constructor() {
    this.product = [
      new Product(
      "NICEHAT",                                  //SKU
      "A nice black hat",                         //Name
      "/assets/images/products/black-hat.jpg",    //ImageUrl
      ["Men", "Accessories", "Hats"],             //Department
      29.99                                       //price
    ),
    new Product(
      "NYSHOES",
      "Black running shoes",
      "/assets/images/product/black-shoes.jpg",
      ["Men", "Shoes", "Running Shoes"],
      109.99
    )
  ];
  }

  ngOnInit(): void {
  }
}
