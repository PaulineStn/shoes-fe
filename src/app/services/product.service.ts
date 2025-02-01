import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/shoes'; // URL de votre backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Récupérer un produit par ID
  getProductById(id: number): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouveau produit
  addProduct(product: any): Observable<any> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Mettre à jour un produit
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  // Supprimer un produit
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }

  getLatestShoe(): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/lastShoe`);
  }

  getShoesByPriceAsc(): Observable<any[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/priceAsc`);
  }

  getShoesByPriceDesc(): Observable<any[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/priceDesc`);
  }

  getShoesByNameAsc(): Observable<any[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/nameAsc`);
  }

  getShoesByNameDesc(): Observable<any[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/nameDesc`);
  }
}
