import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  createProduct(product : Product): Observable<any> {
    return this.http.post('http://localhost:4500/tours/create', product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3500/products/all', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }


  updateProductById(productID: string, updatedProduct: Product): Observable<any> {
    console.log(updatedProduct);
    console.log(productID);
    
    
    return this.http.put(`http://localhost:3500/products/update/${productID}`, updatedProduct);
  }
  

  getSingleProduct(productID:string){

    console.log(productID);
    
    return this.http.get(`http://localhost:3500/products/single/${productID}`)
  }

  
  deleteProduct(productID: string): Observable<any> {
    return this.http.delete(`http://localhost:3500/products/${productID}`)
   
  }
}
