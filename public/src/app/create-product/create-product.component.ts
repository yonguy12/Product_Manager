import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProduct: any = {"title" : "", "price": "", "url":""}
  message: any = {"exist": false, "message": ""}
  constructor(private _ProductService: ProductService) { }

  ngOnInit() {
  }

  createProduct() {
    console.log(this.newProduct)
    this._ProductService.createProduct(this.newProduct).subscribe(data => {
      this.message.message = ""
      if(data["errors"]) {
        console.log(data['errors'])
        this.message.exist = true
        if (data["errors"].title) {
          this.message.message += data['errors'].title.message
          this.message.message += " "
        }
        if (data["errors"].price) {
          this.message.message += data['errors'].price.message
        }
      }
      else{
        this.message = false;
      }
      console.log(this.message)
      console.log(data);
    })
    this.newProduct = {"title" : "", "price": "", "url":""};
    // this.router.navigate(['/authors'])
  }
}

