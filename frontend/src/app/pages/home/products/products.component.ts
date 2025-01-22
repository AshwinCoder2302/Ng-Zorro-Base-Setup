import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  products: any;

  constructor(private productService: ProductService){
   
  }
  ngOnInit(): void {
    this.getProducts();
  }

  onAddProduct(): void {
    console.log('Add product button clicked');
  }

  onEditProduct(product: any): void {
    console.log('Edit product:', product);
  }

  onDeleteProduct(product: any): void {
    console.log('Deleted product:', product);
  }

  getProducts(): any {
    this.productService.getProducts().subscribe(productResponse => {
          this.products = productResponse;
        });
  }
}
