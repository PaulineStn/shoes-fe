import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { NgModel } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { ProductComponent } from './product/product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // Liste des produits
  filteredProducts: Product[] = [];

  sortOptions = [
    { value: 'priceAsc', label: 'Prix croissant' },
    { value: 'priceDesc', label: 'Prix décroissant' },
    { value: 'nameAsc', label: 'Nom A-Z' },
    { value: 'nameDesc', label: 'Nom Z-A' }
  ];
  selectedSort: string = 'nameAsc';

  constructor(
    private productService: ProductService,
    private searchService: SearchService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.selectedSort = 'nameAsc'; //Par défaut les produits sont affichés par ordre alphabétique
    this.getShoes(); //Charger initialement les produits
    this.searchService.currentSearchQuery.subscribe(query => {
      console.log('Recherche en cours :', query);
      this.filterProducts(query);
    });
  }
  filterProducts(query: string): void {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery)
      );
    } else {
      this.filteredProducts = [...this.products]; //Affiche tout si pas de recherche
    }
  }


  getShoes(): void {
    switch (this.selectedSort) {
      case 'priceAsc':
        this.productService.getShoesByPriceAsc().subscribe((data: Product[]) => {
          this.products = data;
          this.filteredProducts = [...this.products]; //Initialisation du filtrage
        });
        break;
      case 'priceDesc':
        this.productService.getShoesByPriceDesc().subscribe((data: Product[]) => {
          this.products = data;
          this.filteredProducts = [...this.products];
        });
        break;
      case 'nameAsc':
        this.productService.getShoesByNameAsc().subscribe((data: Product[]) => {
          this.products = data;
          this.filteredProducts = [...this.products];
        });
        break;
      case 'nameDesc':
        this.productService.getShoesByNameDesc().subscribe((data: Product[]) => {
          this.products = data;
          this.filteredProducts = [...this.products];
        });
        break;
    }
  }

  onSortChange(): void {
    this.getShoes(); // Relancer la requête lorsque le tri change
  }

  viewDetails(product: Product) {
    this.dialog.open(ProductComponent, {
      width: '400px',
      data: product
    });
  }



  
}
