import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor( ){
    console.log("Product component called")
  }

  products = [
    { id: 1, name: 'Product 1', price: 100, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 200, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 200, category: 'Category 3' },
    { id: 4, name: 'Product 4', price: 200, category: 'Category 4' },
    { id: 5, name: 'Product 5', price: 200, category: 'Category 5' },
    { id: 6, name: 'Product 6', price: 200, category: 'Category 6' },
    { id: 7, name: 'Product 7', price: 200, category: 'Category 7' },
    { id: 8, name: 'Product 8', price: 200, category: 'Category 8' },
    { id: 9, name: 'Product 9', price: 200, category: 'Category 9' },
    { id: 10, name: 'Product 10', price: 200, category: 'Category 10' },
  ];

  onAddProduct(): void {
    console.log('Add product button clicked');
  }

  onEditProduct(product: any): void {
    console.log('Edit product:', product);
  }

  onDeleteProduct(product: any): void {
    this.products = this.products.filter(p => p.id !== product.id);
    console.log('Deleted product:', product);
  }
}
