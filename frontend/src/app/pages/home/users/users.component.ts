import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestEndpoints } from '../../../services/rest-endpoints';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  createUserForm!: FormGroup;

  isCreateUserPopup: boolean = false;

  isConfirmLoading = false;

  constructor(private httpClientService:HttpClientService, 
    private fb: FormBuilder,
    private restEndpoints: RestEndpoints,
    private notification: NzNotificationService
  ){}

  ngOnInit(): void {
    this.getUsers();
    this.createUserForm = this.fb.group({
      username: [null, [Validators.required]], 
      fullName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
      mobileNo: [null, [Validators.required]],
      email: [null, [Validators.required]]
    });
  }

  users: any[] = [];

  getUsers(): void {
    this.httpClientService.get(this.restEndpoints.GET_USERS, true).subscribe({
      next: (response) => {
        if (response?.data) {
          this.users = response.data.map((user: any) => ({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            role: user.role,
            gender: user.gender,
            mobileNo: user.mobileNo,
            email: user.email
          }));
        }
      }
    });
  }

  onAddCategory(): void {
    console.log('Add Category button clicked');
  }

  onEditUser(category: any): void {
    console.log('Edit category:', category);
  }

  onDeleteUser(id: any): void {
    this.httpClientService.delete(id, this.restEndpoints.DELETE_USER, true).subscribe({
      next: (response) => {
        if (response?.data) {
          this.getUsers();
        }
      }
    });
  }

  createUser(){
    if(this.createUserForm.valid) {
      this.httpClientService.post(this.createUserForm.value, this.restEndpoints.CREATE_USER, true).subscribe({
        next: (response) => {
          this.toggleCreateUserPopup();
          this.createNotification('success',`Success`, `User Created Sucessfully`);
          this.getUsers();
          this.refreshAddUserForm();
        }
      });
    }
  }

  toggleCreateUserPopup(): void {
    this.isCreateUserPopup = !this.isCreateUserPopup;
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(
      type,
      title,
      message
    );
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isCreateUserPopup = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isCreateUserPopup = false;
    this.refreshAddUserForm();
  }

  refreshAddUserForm(){
    this.createUserForm = this.fb.group({
      username: new FormControl(null),
      fullName: new FormControl(null), 
      gender: new FormControl(null), 
      role: new FormControl(null), 
      mobileNo: new FormControl(null), 
      email: new FormControl(null), 
    });
  }
  
}
