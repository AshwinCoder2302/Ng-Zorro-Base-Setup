import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  breadcrumb: string = '';

  constructor( private router: Router, private route: ActivatedRoute){
    this.breadcrumb = 'Category'
  }

  isCollapsed = false;

  onSignOut(): void {
    this.router.navigate(['/login']);
  }

  navigateToCategories() {
    this.breadcrumb = 'Category'
    this.router.navigate(['home/categories']);
  }

  navigateToProducts() {
    this.breadcrumb = 'Products'
    this.router.navigate(['home/products']);
  }

  navigateToHome() {
    this.breadcrumb = ''
    this.router.navigate(['home']);
  }
}
