import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientService } from '../../../services/http-client.service';
import { RestEndpoints } from '../../../services/rest-endpoints';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  createUserForm!: FormGroup;
  updateUserForm!: FormGroup;
  isPopupVisible: boolean = false; // For both create and update
  isConfirmLoading: boolean = false;
  popupMode: 'create' | 'update' = 'create'; // Tracks the mode of the modal
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private httpClientService: HttpClientService,
    private restEndpoints: RestEndpoints,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.initForms();
  }

  // Initialize Forms
  private initForms(): void {
    const userFormControls = {
      id: [null], // Only used for the update form
      username: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
      mobileNo: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: [null, [Validators.required, Validators.email]],
    };

    this.createUserForm = this.fb.group({ ...userFormControls });
    this.updateUserForm = this.fb.group({ ...userFormControls });
  }

  // Fetch Users
  getUsers(): void {
    this.httpClientService.get(this.restEndpoints.GET_USERS, true).subscribe({
      next: (response) => {
        this.users = response?.data || [];
      },
    });
  }

  // Open Modal
  openPopup(mode: 'create' | 'update', user?: any): void {
    this.popupMode = mode;
    this.isPopupVisible = true;

    if (mode === 'update' && user) {
      this.updateUserForm.patchValue(user);
    } else {
      this.createUserForm.reset();
    }
  }

  // Close Modal
  closePopup(): void {
    this.isPopupVisible = false;
    this.createUserForm.reset();
    this.updateUserForm.reset();
  }

  // Create User
  createUser(): void {
    if (this.createUserForm.valid) {
      this.isConfirmLoading = true;
      this.httpClientService
        .post(this.createUserForm.value, this.restEndpoints.CREATE_USER, true)
        .subscribe({
          next: () => {
            this.notify('success', 'User Created Successfully');
            this.getUsers();
            this.closePopup();
          },
          complete: () => (this.isConfirmLoading = false),
        });
    }
  }

  // Update User
  updateUser(): void {
    if (this.updateUserForm.valid) {
      this.isConfirmLoading = true;
      this.httpClientService
        .patch(this.updateUserForm.value, this.restEndpoints.UPDATE_USER+"/"+this.updateUserForm.value.id, true)
        .subscribe({
          next: () => {
            this.notify('success', 'User Updated Successfully');
            this.getUsers();
            this.closePopup();
          },
          complete: () => (this.isConfirmLoading = false),
        });
    }
  }

  // Delete User
  deleteUser(id: string): void {
    this.httpClientService.delete(id, this.restEndpoints.DELETE_USER, true).subscribe({
      next: () => {
        this.notify('success', 'User Deleted Successfully');
        this.getUsers();
      },
    });
  }

  // Notifications
  private notify(type: string, message: string): void {
    this.notification.create(type, 'Notification', message);
  }
}
