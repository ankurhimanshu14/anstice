import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  image!: string;
  productName!: string;
  size!: string;
  weight!: number;
  rawMaterial!: string;
  manufacturedBy!: string;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.http = http;
    this.loading = true;
  }

  ngOnInit(): void {
  }

  addProduct(img: HTMLInputElement, prdId: HTMLInputElement, prdName: HTMLInputElement, s: HTMLInputElement, w: HTMLInputElement, rm: HTMLInputElement, manu: HTMLInputElement, ret: HTMLInputElement): void {
    
    this.http.post("http://localhost:5000/api/v1/private/products/addproducts",
    JSON.stringify({
      image: img.value,
      productId: prdId.value,
      productName: prdName.value,
      size: s.value,
      weight: w.value,
      rawMaterial: rm.value,
      manufacturedBy: manu.value,
      retailer: ret.value
    })
    ).subscribe(result => {
      if(result) {
        console.log(result);
      }
      this.loading = false;
    })
  }
}
