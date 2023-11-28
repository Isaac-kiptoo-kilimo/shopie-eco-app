import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
filter=''


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
