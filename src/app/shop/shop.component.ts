import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListproductsService} from "../listproducts.service";
import {Product} from "../product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'productPrice']

  productName : string ="";

  products : Product[] = [];

  constructor(private http: HttpClient, private productService: ListproductsService) { }

  ngOnInit(): void {
    this.sendSearch()
  }

  sendSearch() {
    // this.productService.getProducts(this.productName).subscribe(data => {
    //   console.log(data)
    // })
    this.productService.getProducts(this.productName).subscribe((data:Product[]) => this.products = data)
    console.log(this.products)
  }

  resetSearch() {
    this.productName = "";
    this.sendSearch()
  }

}
