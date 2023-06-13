import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formSearchName: FormGroup;
  formSearchPrice: FormGroup;

  public getId: number = 0;

  productos: Array<any> = [];
  
  constructor(public productsService:ProductService,
      private fs:FormBuilder,
      public router:Router) {

        this.formSearchName = this.fs.group({title: ""});
        this.formSearchPrice = this.fs.group({price: 0});
        
      }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      return this.productos = products
    })
  }

  getProductsByName() {
    let title : string = this.formSearchName.get('title')?.value;
    this.productsService.getProductsByName(title).subscribe((products) => {
      return this.productos = products
    })
  }

  getProductsByPrice() {
    let precio : number = this.formSearchPrice.get('price')?.value;
    if(precio == null){
      precio = 0;
    }
    console.log("1")
    this.productsService.getProductsByPrice(precio).subscribe((products) => {
      console.log("2")
      console.log(products)
      return this.productos = products
    })
  }

  addProduct() {
    this.router.navigateByUrl('/add');
  }

  updProduct(idProduct: number) {
    this.router.navigateByUrl('/update/' + idProduct);
  }

  delProduct(idProduct: number) {
    this.router.navigateByUrl('/delete/' + idProduct);
  }

  getSortOrder(prop: any) {    
    return function(a: any, b:any) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  }    

  sortProductsByPrice() {
    this.productos.sort(this.getSortOrder("price"));
  }

  sortProductsByName() {
    this.productos.sort(this.getSortOrder("title"));
  }
}
