import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productName : String ="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendSearch() {
    this.http.post('http://127.0.0.1/listprod', this.productName).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  resetSearch() {
    this.productName = "";
  }

}
