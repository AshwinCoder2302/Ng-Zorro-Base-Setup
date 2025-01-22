import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{

  categories: any;

  isAddButtonClicked: boolean = false;

  categoryForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.categoryForm = this.fb.group({
      mail: [null, [Validators.required]], 
      password: [null, [Validators.required]] 
    });
  }

  getCategories(): any {
    this.categoryService.getCategories().subscribe(categoriesResponse => {
          this.categories = categoriesResponse;
        });
  }

  onAddCategory(): void {
    console.log('Add Category button clicked');
  }

  onEditCategory(category: any): void {
    console.log('Edit category:', category);
  }

  onDeleteCategory(category: any): void {
    console.log('Deleted category:', category);
  }

  toggleAddButtonClicked(): void {
      this.isAddButtonClicked = !this.isAddButtonClicked;
    console.log("isAddButtonClicked=====>"+this.isAddButtonClicked)
  }
  
  saveCategory(): void {

  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isAddButtonClicked = false;
  }

  handleCancelTop(): void {
    this.isAddButtonClicked = false;
  }
  
}
