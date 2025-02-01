import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // Liste des produits
  sortOptions = [
    { value: 'priceAsc', label: 'Prix croissant' },
    { value: 'priceDesc', label: 'Prix décroissant' },
    { value: 'nameAsc', label: 'Nom A-Z' },
    { value: 'nameDesc', label: 'Nom Z-A' }
  ];
  selectedSort: string = 'nameAsc';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.selectedSort = 'nameAsc';
    //this.productService.getProducts();
    this.getShoes();
  }


  getShoes(): void {
    switch (this.selectedSort) {
      case 'priceAsc':
        this.productService.getShoesByPriceAsc().subscribe((data: Product[]) => {this.products = data});
        break;
      case 'priceDesc':
        this.productService.getShoesByPriceDesc().subscribe((data: Product[]) => {this.products = data});
        break;
      case 'nameAsc':
        this.productService.getShoesByNameAsc().subscribe((data: Product[]) => {this.products = data});
        break;
      case 'nameDesc':
        this.productService.getShoesByNameDesc().subscribe((data: Product[]) => {this.products = data});
        break;
    }
  }

  onSortChange(): void {
    this.getShoes(); // Relancer la requête lorsque le tri change
  }



  
}
