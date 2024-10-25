import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    role: 'Admin',
    gender: 'Male'
  };
}
