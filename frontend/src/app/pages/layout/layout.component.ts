import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor( private router: Router){

  }

  isCollapsed = false;

  onSignOut(): void {
    this.router.navigate(['/login']);
  }
}