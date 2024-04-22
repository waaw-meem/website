import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/data-type';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:Product){
    return this.http.post('http://localhost:3000/products',data)
  }

  getProduct(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getSingleroduct(id:number){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  } 

  updateProduct(product:Product){
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`,product)
  }

  trendyProducts(){
    return this.http.get<Product[]>("http://localhost:3000/products?_limit=8");
   }

   searchProduct(query:string){
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`)
   }

}
