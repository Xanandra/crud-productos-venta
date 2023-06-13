import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service'; 
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  
  constructor() { }

  ngOnInit(): void {
  }
}

