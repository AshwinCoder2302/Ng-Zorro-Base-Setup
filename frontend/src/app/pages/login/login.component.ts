import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message'; 
import { Router } from '@angular/router'; 
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../models/login.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  newPasswordForm!: FormGroup;

  isForgotPassword: boolean = false; 

  isSetNewPassword: boolean = false; 

  hospital!: Hospital;

  loginResponse!: LoginResponse;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private notification: NzNotificationService,
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {    
      this.loginForm = this.fb.group({
        mail: [null, [Validators.required]], 
        password: [null, [Validators.required]] 
      });
      this.newPasswordForm = this.fb.group({
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
  }

  toggleForgotPassword(): void {
    this.isForgotPassword = !this.isForgotPassword;
  }

  toggleSetNewPassword(): void {
    this.isSetNewPassword = !this.isSetNewPassword;
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
    } else {
      this.message.error('Please fill in all required fields!'); 
    }
  }

// use below login funtion to call back end login api to get access token

  // login(loginRequest: any): void {
  //   this.loginService.login(loginRequest).subscribe(loginResponse => {
  //     this.loginResponse = loginResponse;
  //     localStorage.setItem("accessToken",loginResponse.accessToken);
  //      // if(loginData.username == 'ashwin' && loginData.username == 'ashwin'){
  //     //   this.toggleSetNewPassword();
  //     //   this.createNotification('success');
  //     // }
  //     this.router.navigate(['/home/staffs']);
  //   });
  // }

  // temporary login function. Use above for backend interaction

   login(loginRequest: any): void {
      this.router.navigate(['/home/categories']);
  }

  setNewPassword(): void {
    if (this.newPasswordForm.valid) {
      const { newPassword, confirmPassword } = this.newPasswordForm.value;
      if (newPassword === confirmPassword) {
        console.log('New password set successfully');
        this.toggleSetNewPassword();
      } else {
        console.error('Passwords do not match');
      }
    }
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

}
