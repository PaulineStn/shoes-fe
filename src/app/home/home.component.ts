import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  latestShoe!: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getLatestShoe().subscribe(data => {
      this.latestShoe = data;
    });
  }
}
