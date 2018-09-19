import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updateProduct: any;
  id: any;
  message: any = {"exist": false, "message": ""}


  constructor(private _ProductService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updateProduct = { title: "", price: "", url: "" }
    this.getProduct();
  }

  editProduct(id) {
    this._ProductService.editProduct(this.updateProduct._id, this.updateProduct).subscribe(data => {
      console.log("this is editting", data);
    })
    this.router.navigate(['/products']);
  }
  getProduct() {
    this.route.params.subscribe(params => {
      this.id = params
      console.log(this.id);
    })
    this._ProductService.getProduct(this.id).subscribe(data=> {
      console.log("this is data in get product", data);
      this.updateProduct = data
      // this.updateProduct = this.updateProduct[0]
    })
  }
}
