import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {OrderSummary} from "./order-summary";

@Injectable({
  providedIn: 'root'
})
export class ListorderService {
  orderUrl = 'http://127.0.0.1/listorder'

  constructor(private http: HttpClient) { }

  getOrders(): Observable<OrderSummary[]> {
    return this.http.get<OrderSummary[]>(this.orderUrl)
  }
}
