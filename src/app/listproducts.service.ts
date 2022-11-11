import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListproductsService {

  constructor(private http: HttpClient) { }

  getProducts(productName: string): Observable<Object> {
      return this.http.post<string>('http://127.0.0.1/listprod', productName)
  }
}
