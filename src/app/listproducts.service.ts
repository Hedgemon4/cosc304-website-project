import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {ProductSearch} from "./product-search";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ListproductsService {

  constructor(private http: HttpClient) {
  }

  products : Product[] = []

  getProducts(productName: string): Observable<any> {
    let ps = new class implements ProductSearch {
      product = productName;
    }
    return this.http.post('http://127.0.0.1/listprod', ps, { headers: new HttpHeaders().set('Content-Type', 'application/json')})
  }
}
