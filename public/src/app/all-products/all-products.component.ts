import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any;

  constructor(private _ProductService: ProductService) { }

  ngOnInit() {
    this.allProducts();
  }

  allProducts() {
    this._ProductService.allProducts().subscribe(data => {
      this.products = data;
      console.log("this is all product data", data);
    })
  }
  deleteProduct(id) {
    this._ProductService.deleteProduct(id).subscribe(data => {
      console.log("this is delete data", data)
    })
    this.allProducts();
  }
}
