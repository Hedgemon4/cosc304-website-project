import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {ProductSearch} from "./product-search";

@Injectable({
  providedIn: 'root'
})
export class ListproductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(productName: string): Observable<Object> {
    let ps = new class implements ProductSearch {
      product = productName;
    }
    return this.http.post<ProductSearch>('http://127.0.0.1/listprod', ps, { headers: new HttpHeaders().set('Content-Type', 'application/json')})
  }
}
