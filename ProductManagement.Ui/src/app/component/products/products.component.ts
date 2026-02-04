import { Component,OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];

  productCode = '';
  error  = '';

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log('Products loaded:', products);
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  addProduct() {
    this.error = '';

    this.productService.addProduct(this.productCode)
      .subscribe({
        next: () => {
          this.productCode = '';
          this.loadProducts();
        },
        error: err => {
          this.error = err.error;
        }
      });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe({
        next: () => {
          this.loadProducts();
        },
        error: err => {
          console.error('Error deleting product:', err);
        }
      });
  }
}