import { Component, OnInit } from '@angular/core';
import {ListorderService} from "../listorder.service";

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})


export class ListordersComponent implements OnInit {
  info: string = "test"

  constructor(private orderService: ListorderService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.orderService.getOrders().subscribe(info => this.info = info)
  }
}
