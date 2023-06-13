import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formAddProduct: FormGroup;

  addResult: Array<any> = []

  constructor(private fs:FormBuilder,
    public productService:ProductService,
    public router:Router) { 
      this.formAddProduct=this.fs.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        discountPercentage: ['', Validators.required],
        rating: ['', Validators.required],
        stock: ['', Validators.required],
        brand: ['', Validators.required],
        category: ['', Validators.required],
        thumbnail: ['https://i.dummyjson.com/data/products/2/1.jpg']
      });
    }

  ngOnInit(): void {
  }

  addProduct():any {
    this.productService.addProducts(this.formAddProduct.value).subscribe((result) => {
      console.log(result);
      this.addResult = result;
    });
  }
  
  home() {
    this.router.navigateByUrl('/home');
  }
}
