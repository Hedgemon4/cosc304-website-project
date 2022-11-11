import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListproductsService} from "../listproducts.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productName : string ="";

  constructor(private http: HttpClient, private productService: ListproductsService) { }

  ngOnInit(): void {
  }

  sendSearch() {
    this.productService.getProducts(this.productName).subscribe()
  }

  resetSearch() {
    this.productName = "";
  }

}
