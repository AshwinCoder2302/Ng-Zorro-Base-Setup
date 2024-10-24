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
    this.breadcrumb = ''
  }

  isCollapsed = false;

  onSignOut(): void {
    this.router.navigate(['/login']);
  }

  navigateToCategories() {
    this.breadcrumb = 'Category'
    this.router.navigate(['dashboard/categories']);
  }

  navigateToProducts() {
    this.breadcrumb = 'Products'
    this.router.navigate(['dashboard/products']);
  }

  navigateToDashboard() {
    this.breadcrumb = ''
    this.router.navigate(['dashboard']);
  }

  navigateToUser() {
    this.breadcrumb = 'Users'
    this.router.navigate(['dashboard/users']);
  }
}
