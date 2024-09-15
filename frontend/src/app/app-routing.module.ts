import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StaffComponent } from './pages/staff/staff.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: 'staffs', component: StaffComponent },
      { path: 'hospitals', component: HospitalComponent }, 
      { path: 'inventories', component: InventoryComponent }, 
    ],
  },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
