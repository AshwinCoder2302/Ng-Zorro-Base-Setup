import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Ashwin', roleName: "admin"},
    { id: 2, name: 'Sam', roleName: "user"},
    { id: 3, name: 'Abinesh', roleName: "user"},
    { id: 4, name: 'Amal Raj', roleName: "user"},
    { id: 5, name: 'Rajesh', roleName: "user"},
    { id: 6, name: 'Jashwanth', roleName: "user"},
    { id: 7, name: 'Rajkumar', roleName: "user"},
    { id: 8, name: 'Anish', roleName: "user"},
    { id: 9, name: 'Vinoth', roleName: "user"},
    { id: 10, name: 'Ram Kumar', roleName: "user"}
  ];

  onAddCategory(): void {
    console.log('Add Category button clicked');
  }

  onEditUser(category: any): void {
    console.log('Edit category:', category);
  }

  onDeleteUser(category: any): void {
    this.users = this.users.filter(p => p.id !== category.id);
    console.log('Deleted category:', category);
  }
}
