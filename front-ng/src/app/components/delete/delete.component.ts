import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
  public idProduct: any;
  public product: Array<any> = [];
  public delMessage: string = "";

  constructor(public activateRoute:ActivatedRoute,
    public productService:ProductService,
    public router:Router) { 

      this.idProduct = this.activateRoute.snapshot.paramMap.get('id');
      console.log(this.idProduct);
      this.productService.getProductsById(this.idProduct).subscribe((result)=>{
        // console.log(result)
        this.product = result;
      });
  }

  ngOnInit(): void {
  }

  delProduct(): void{
    this.productService.delProduct(this.idProduct).subscribe((result)=>{
      console.log(result)
      this.product = result;
      this.delMessage = "El Producto Ha Sido Eliminado ";
      console.log(this.delMessage);
    });
  }
  
  home() {
    this.router.navigateByUrl('/home');
  }
}
