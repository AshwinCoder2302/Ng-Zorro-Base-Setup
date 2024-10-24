import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMenuModule } from 'ng-zorro-antd/menu'; // Import NzMenuModule
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic'; // Import the statistic module
import { NzCardModule } from 'ng-zorro-antd/card'; // For the cards
import { AllIcons } from '../../icon-collection';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    LayoutComponent,
    ProductsComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    NzStatisticModule,
    NzCardModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzMessageModule,
    NzNotificationModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzDropDownModule,
    NzTableModule,
  ],
  providers: [
    { provide: NZ_ICONS, useValue: AllIcons } // Register icons here
  ],
})
export class HomeModule { }
