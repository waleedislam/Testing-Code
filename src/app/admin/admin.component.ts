import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserListComponent,FormsModule,CommonModule,UserDetailComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',

})
export class AdminComponent {
  name:string='';
  gender:string='Male';
  subType:string='Yearly';
  status:string='Active';
 constructor(private createUser:UserService){
 }
showSuccess = false;

CreateUser() {
  this.createUser.CreateUsers(this.name, this.gender, this.subType, this.status);

  console.log(this.createUser.users);

  this.showSuccess = true;
  setTimeout(() => this.showSuccess = false, 2000);
}
}
