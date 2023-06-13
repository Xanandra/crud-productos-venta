import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = "http://localhost:3000/products";

  constructor(private _http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.URL);
  }

  addProducts(productData:Product): Observable<Product[]> {
    return this._http.post<any>(this.URL, productData);
  }

  getProductsById(id:any): Observable<any> {
    return this._http.get(this.URL+"/"+id);
  }

  getProductsByPrice(price:any): Observable<Product[]> {
    return this._http.get<Product[]>(this.URL+"/search?price="+price);
  }

  getProductsByName(title:any): Observable<Product[]> {
    return this._http.get<Product[]>(this.URL+"/title/"+title);
  }

  updProduct(id:any, productData:Product): Observable<any> {
    return this._http.put<any>(this.URL+"/"+id,productData);
  }

  delProduct(id:any): Observable<Product[]> {
    return this._http.delete<any>(this.URL+"/"+id);
  }
}
