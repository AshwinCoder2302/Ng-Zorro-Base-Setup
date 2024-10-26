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

  selectedMenu: string = '';

  position: NzPlacementType = 'bottomRight';

  constructor( private router: Router, private route: ActivatedRoute){
   this.breadcrumb = 'Dashboard'
   this.selectedMenu = 'Dashboard';
  }

  navigateToComponent(menu: string): void {
    if (menu === 'Sign Out') {
      this.selectedMenu = '';
      this.breadcrumb = '';
      this.router.navigate(['login']); 
    } else if (menu === 'Profile') {
      this.selectedMenu = '';
      this.breadcrumb = 'Profile';
      this.router.navigate(['profile']);
    } else {
      this.selectedMenu = menu;
      this.breadcrumb = menu;
      this.router.navigate([menu.toLowerCase()]);
    }
  }
}
