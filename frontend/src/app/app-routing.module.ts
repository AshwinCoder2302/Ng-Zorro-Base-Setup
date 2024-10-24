import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/home/layout/layout.component';
import { CategoriesComponent } from './pages/home/categories/categories.component';
import { ProductsComponent } from './pages/home/products/products.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { UsersComponent } from './pages/home/users/users.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent }, 
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'users', component: UsersComponent},
      { path: 'categories', component: CategoriesComponent },
      { path: 'products', component: ProductsComponent },
    ]
  },
  // { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
