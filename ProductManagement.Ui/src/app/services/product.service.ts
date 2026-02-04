import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://localhost:7135/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<ProductModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProductModel>(url);
  }

  addProduct(productCode: string): Observable<ProductModel> {
    const product = { productCode };
    return this.http.post<ProductModel>(this.apiUrl, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
