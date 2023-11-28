import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  products!: Product[];

  showCart = true

  constructor(private userService: UserService,  private cartService: CartService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.userService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
      return products;
    });
  }

  addToCart(product: any) {
    console.log(product);
    
    this.cartService.addToCart(product);
  }
}
