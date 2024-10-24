import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  usersCount: number = 10;
  categoriesCount: number = 4;
  productsCount: number = 8;
}
