import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  breadcrumb: string = '';

  position: NzPlacementType = 'bottomRight';

  constructor( private router: Router, private route: ActivatedRoute){
    this.breadcrumb = ''
  }

  isCollapsed = false;

  onSignOut(): void {
    this.router.navigate(['/login']);
  }

  navigateToCategories() {
    this.breadcrumb = 'Category'
    this.router.navigate(['categories']);
  }

  navigateToProducts() {
    this.breadcrumb = 'Products'
    this.router.navigate(['products']);
  }

  navigateToDashboard() {
    this.breadcrumb = ''
    this.router.navigate(['dashboard']);
  }

  navigateToUser() {
    this.breadcrumb = 'Users'
    this.router.navigate(['users']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToProfile(){
    this.router.navigate(['profile']);
  }
}
