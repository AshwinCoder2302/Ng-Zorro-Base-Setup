import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message'; 
import { Router } from '@angular/router'; 
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../models/login.response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    private loginService: LoginService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {    
      this.signupForm = this.fb.group({
        username: [null, [Validators.required]], 
        password: [null, [Validators.required]],
        gender: [null, [Validators.required]],
        role: [null, [Validators.required]],
        mobileNo: [null, [Validators.required]],
        emailId: [null, [Validators.required]]
      });
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

  toggleSignUp(): void {
    this.isSignUp = !this.isSignUp;
  }

  toggleLogin(): void {
    this.isSignUp = false;
    this.isForgotPassword = false;
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
    } else {
      this.message.error('Please fill in all required fields!'); 
    }
  }

  signup(): void {
    if(this.signupForm.valid){
      console.log("Values========>"+this.signupForm.value);
      console.log("Sign up =======>"+this.signupForm.value.username);
      this.createUser(this.signupForm.value).subscribe(response => {
        console.log('User created:', response);
      });
    }
  }

  createUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`http://localhost:8082/user`, userData, { headers });
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
      this.router.navigate(['dashboard']);
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

}
