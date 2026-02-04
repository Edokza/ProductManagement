import { Component,OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, QrDialogComponent, ConfirmDialogComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];

  productCode = '';
  error  = '';

  showQr = false;
  qrValue = '';

  deleteCode = '';
  deleteId: number | null = null;
  showConfirm = false;

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

    const cleanProductCode = this.productCode.replace(/-/g, '');

    this.productService.addProduct(cleanProductCode)
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

  formatCode(code: string): string {
    return code.match(/.{1,5}/g)?.join('-') ?? code;
  }

  onCodeInput(value: string) {

    let v = value.toUpperCase();

    v = v.replace(/[^A-Z0-9]/g, '');

    v = v.substring(0, 30);

    const parts = v.match(/.{1,5}/g);

    this.productCode = parts ? parts.join('-') : '';
  }

  openQr(code: string) {
    this.qrValue = code;
    this.showQr = true;
    console.log(this.qrValue, this.showQr);
  }

  closeQr() {
    this.showQr = false;
    this.qrValue = '';
    console.log(this.qrValue, this.showQr);
  }

  askDelete(id: number, code: string) {
    this.deleteId = id;
    this.deleteCode = this.formatCode(code);
    this.showConfirm = true;
  }
  onConfirm() {
  if (this.deleteId == null) return;

  this.productService.deleteProduct(this.deleteId)
    .subscribe(() => {
      this.loadProducts();
      this.closeConfirm();
    });
}

onCancel() {
  this.closeConfirm();
}

closeConfirm() {
  this.showConfirm = false;
  this.deleteId = null;
  this.deleteCode = '';
}


}