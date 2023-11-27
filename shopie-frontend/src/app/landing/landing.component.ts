import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products! : Product[]
  constructor(private productService:ProductService){}

ngOnInit(){
  this.getProducts()
}
  
  getProducts(){
    this.productService.getProducts().subscribe((products)=>{
      console.log(products);
      this.products=products
      return products
    })
  }
}
