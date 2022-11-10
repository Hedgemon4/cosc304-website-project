import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map,  catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListorderService {
  orderUrl = 'http://127.0.0.1/listorder'

  constructor(private http: HttpClient) { }

  getOrders(): Observable<string> {
    return this.http.get(this.orderUrl, {responseType: "text"})
  }
}
