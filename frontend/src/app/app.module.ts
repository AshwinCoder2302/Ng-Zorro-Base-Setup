import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  // Import this for reactive forms
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
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
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HomeModule,
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
    NzTableModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
    // You can provide HTTP interceptors here if needed for authentication
    // { provide: HTTP_INTERCEPTORS, useClass: YourInterceptorClass, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
