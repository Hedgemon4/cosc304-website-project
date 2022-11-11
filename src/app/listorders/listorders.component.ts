import { Component, OnInit } from '@angular/core';
import {ListorderService} from "../listorder.service";
import {OrderSummary} from "../order-summary";

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})


export class ListordersComponent implements OnInit {
  orders : OrderSummary[] = [];

  constructor(private orderService: ListorderService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.orderService.getOrders().subscribe((info : OrderSummary[] ) => this.orders = info)
    // this.orderService.getOrders().subscribe(info => this.test = info)
  }
}
