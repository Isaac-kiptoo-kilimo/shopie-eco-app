import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  products!: Product[];

  constructor(private userService: UserService) {}

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
}
