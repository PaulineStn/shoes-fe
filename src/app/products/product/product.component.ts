import { Component, Input, Inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //@Input() product!: Product; // Reçoit un produit depuis le composant parent
  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {}

  addToCart(product: Product) {
   console.log(`${this.product.name} ajouté au panier`);
  }
}
