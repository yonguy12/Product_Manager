import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }


  createProduct(data) {
    console.log("serving create product")
    return this._http.post('/api/products', data)
  }
  allProducts() {
    console.log("serving all products");
    return this._http.get('/api/products');
  }
  deleteProduct(id) {
    console.log("serving delete product");
    return this._http.delete('/api/products/' + id);
  }
  editProduct(id, updateProduct) {
    console.log("serving edit product");
    return this._http.patch('api/products/' +id, updateProduct)
  }
  getProduct(id) {
    console.log("serving get product", id)
    return this._http.get('/api/products/' + id.id)
  }
}