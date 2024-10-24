import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories = [
    { id: 1, name: 'Category 1', price: 100},
    { id: 2, name: 'Category 2', price: 200},
    { id: 3, name: 'Category 3', price: 200},
    { id: 4, name: 'Category 4', price: 200},
    { id: 5, name: 'Category 5', price: 200},
    { id: 6, name: 'Category 6', price: 200},
    { id: 7, name: 'Category 7', price: 200},
    { id: 8, name: 'Category 8', price: 200},
    { id: 9, name: 'Category 9', price: 200},
    { id: 10, name: 'Category 10', price: 200}
  ];

  onAddCategory(): void {
    console.log('Add Category button clicked');
  }

  onEditCategory(category: any): void {
    console.log('Edit category:', category);
  }

  onDeleteCategory(category: any): void {
    this.categories = this.categories.filter(p => p.id !== category.id);
    console.log('Deleted category:', category);
  }
}
