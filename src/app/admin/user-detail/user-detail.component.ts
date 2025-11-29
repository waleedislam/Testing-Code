import { Component, inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  selectedUser!:User;
  constructor(private service:UserService){}
  ngOnInit(){
    this.service.UserDetailsClicked.subscribe((data:User)=>{
       this.selectedUser=data;
    })
  }
}
