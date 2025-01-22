import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { Observable } from 'rxjs';
import { RestEndpoints } from '../../../services/rest-endpoints';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  user: any = {};

  constructor(private httpClientService:HttpClientService, 
    private restEndpoints: RestEndpoints,
    private notification: NzNotificationService,
  ){}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.httpClientService.get(this.restEndpoints.GET_USER_PROFILE, true).subscribe({
      next: (response) => {
        const userData = response.data;
        console.log(userData)
        this.user = {
          name: userData.username,
          phoneNumber: userData.mobileNo,
          email: userData.email,
          role: userData.role,
          gender: userData.gender
        };
      }
    });
  }
}
