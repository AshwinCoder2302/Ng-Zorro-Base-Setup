import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.models';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message'; 
import { Router } from '@angular/router'; 
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginResponse } from '../../models/login.response';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../../services/http-client.service';
import { RestEndpoints } from '../../services/rest-endpoints';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  signupForm!: FormGroup;

  newPasswordForm!: FormGroup;

  isForgotPassword: boolean = false; 

  isSignUp: boolean = false;

  hospital!: Hospital;

  loginResponse!: LoginResponse;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private notification: NzNotificationService,
    private router: Router,
    private http: HttpClient,
    private httpClientService: HttpClientService,
    private restEndpoints: RestEndpoints
  ) {
  }

  ngOnInit(): void {    
      this.signupForm = this.fb.group({
        username: [null, [Validators.required]], 
        password: [null, [Validators.required]],
        fullName: [null, [Validators.required]],
        gender: [null, [Validators.required]],
        role: [null, [Validators.required]],
        mobileNo: [null, [Validators.required]],
        email: [null, [Validators.required]]
      });
      this.loginForm = this.fb.group({
        username: [null, [Validators.required]], 
        password: [null, [Validators.required]] 
      });
      this.newPasswordForm = this.fb.group({
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
  }

  toggleForgotPassword(): void {
    this.isForgotPassword = !this.isForgotPassword;
    this.refreshLoginForm();
  }

  toggleSignUp(): void {
    this.isSignUp = !this.isSignUp;
    this.refreshLoginForm();
  }

  toggleLogin(): void {
    this.isSignUp = false;
    this.isForgotPassword = false;
    this.refreshSignUpForm();
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
    } else {
      this.message.error('Please fill in all required fields!'); 
    }
  }

  signup(): void {
    if (this.signupForm.valid) {
      this.httpClientService.post(this.signupForm.value, this.restEndpoints.SIGN_UP, false).subscribe({
        next: (response) => {
          this.toggleLogin();
          this.createNotification('success',`Registered Sucessfully`, `you have successfully registered!`);
        },
        error: (error) => {
          console.error('Error occurred during signup:', error);
          this.handleError(error); 
        },
      });
    }
  }

  login(loginRequest: any): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value; 
      this.httpClientService.post(this.loginForm.value, this.restEndpoints.LOGIN, false).subscribe({
        next: (response) => {
          localStorage.setItem('Authorization', `Bearer ${response.data.accessToken}`)
          this.router.navigate(['dashboard']);
          this.createNotification('success',`Welcome, ${username}`, `you have successfully logged in to your account!`);
        },
        error: (error) => {
          console.error('Error occurred during signup:', error);
          this.handleError(error); 
        },
      });
    }
  }
  
  private handleError(error: any): void {
    if (error.status === 400) {
      console.error('Bad Request:', error.error.message || 'Invalid input.');
    } else if (error.status === 401) {
      console.error('Unauthorized:', error.error.message || 'Invalid credentials.');
    } else if (error.status === 500) {
      console.error('Server Error:', error.error.message || 'Something went wrong on the server.');
    } else {
      console.error('Unknown Error:', error);
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(
      type,
      title,
      message
    );
  }

  refreshSignUpForm(){
    this.signupForm = this.fb.group({
      username: new FormControl(null), 
      password: new FormControl(null), 
      fullName: new FormControl(null), 
      gender: new FormControl(null), 
      role: new FormControl(null), 
      mobileNo: new FormControl(null), 
      email: new FormControl(null), 
    });
  }

  refreshLoginForm(){
    this.loginForm = this.fb.group({
      username: new FormControl(null), 
      password: new FormControl(null), 
    });
  }

}
