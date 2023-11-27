import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  visible = true
  updateProductForm!: FormGroup
  product!: Product
  productID: string=''
  updateProductID :string =''
  constructor( private formBuilder:FormBuilder, private productService:ProductService ){

 this.updateProductForm = this.formBuilder.group({
  name: ['', [Validators.required]],
  price: ['', [Validators.required]],
  shortDescription: ['', [Validators.required]],
  image:['',[Validators.required]]
}
  );
  }

  updateProduct() {
    if (this.updateProductForm.invalid) {
    
      return;
    }
  
    if (!this.product || !this.updateProductID) {
      
      console.error('Invalid product or productID');
      return;
    }
  
    let updatedProduct: Product = this.updateProductForm.value;
     this.productID= this.updateProductID;
  
    console.log(updatedProduct);
  
    this.productService.updateProductById(this.productID, updatedProduct).subscribe(
      (response) => {
        console.log('Tour updated successfully', response);
        this.updateProductForm.reset();
      },
      (error) => {
        console.error('Error updating tour', error);
      }
    );
  }


}
