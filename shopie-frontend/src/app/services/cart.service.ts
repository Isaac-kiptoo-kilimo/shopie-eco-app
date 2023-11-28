import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


   private cartItemsSubject = new BehaviorSubject<any[]>([]);
   cartItems$ = this.cartItemsSubject.asObservable();
 
   constructor() {
    
     this.loadCartFromLocalStorage();
   }
 
   addToCart(product: any) {
     const currentCartItems = this.cartItemsSubject.value;
     const updatedCartItems = [...currentCartItems, product];
     this.cartItemsSubject.next(updatedCartItems);
     this.saveCartToLocalStorage(updatedCartItems);
   }
 
   removeFromCart(index: number) {
     const currentCartItems = this.cartItemsSubject.value;
     const updatedCartItems = currentCartItems.filter((_, i) => i !== index);
     this.cartItemsSubject.next(updatedCartItems);
     this.saveCartToLocalStorage(updatedCartItems);
   }
 
   clearCart() {
     this.cartItemsSubject.next([]);
     this.saveCartToLocalStorage([]);
   }
 
   getCartItems(): any[] {
     return this.cartItemsSubject.value;
   }
 
   private saveCartToLocalStorage(cartItems: any[]) {
     localStorage.setItem('cartItems', JSON.stringify(cartItems));
   }
 
   private loadCartFromLocalStorage() {
     const storedCartItems = localStorage.getItem('cartItems');
     const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
     this.cartItemsSubject.next(cartItems);
   }
}
