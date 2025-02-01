import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product; // Reçoit un produit depuis le composant parent

  addToCart(product: Product) {
    console.log(`${this.product.name} ajouté au panier`);
  }
}
