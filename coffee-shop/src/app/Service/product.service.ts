import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://random-data-api.com/api/coffee/random_coffee?size=50"

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.baseUrl);
  }
}
