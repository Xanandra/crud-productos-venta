import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formUpdProduct:FormGroup;

  public idProduct: any;

  updResult: Array<any> = []

  constructor(private fs:FormBuilder,
    public productService:ProductService,
    public activateRoute:ActivatedRoute,
    public router:Router) { 

    this.idProduct = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.idProduct);
    this.productService.getProductsById(this.idProduct).subscribe(respuesta=>{
      console.log(respuesta);
      
      this.formUpdProduct.setValue({
        title:respuesta['title'],
        description:respuesta['description'],
        price:respuesta['price'],
        discountPercentage:respuesta['discountPercentage'],
        rating:respuesta['rating'],
        stock:respuesta['stock'],
        brand:respuesta['brand'],
        category:respuesta['category'],
        thumbnail:respuesta['thumbnail']
      })
    });
    
    this.formUpdProduct=this.fs.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      discountPercentage: ['', Validators.required],
      rating: ['', Validators.required],
      stock: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      thumbnail: ['']
    });
  }

  ngOnInit(): void {
  }

  updProduct():any {
    this.productService.updProduct(this.idProduct,this.formUpdProduct.value).subscribe((result)=>{
      console.log(result)
      this.updResult = result;
    });
  }
  
  home() {
    this.router.navigateByUrl('/home');
  }
}
