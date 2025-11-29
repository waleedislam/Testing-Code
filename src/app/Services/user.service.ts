import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/user";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    users:User[]=[
        new User('Waleed' , 'male' , 'yearly' , 'active'),
    ];

    constructor(private logger:LoggerService){}

    GetAllUsers(){
        return this.users;
    }
    UserDetailsClicked:EventEmitter<User>=new EventEmitter<User>();

    OnShowUserDetails(user:User){
        this.UserDetailsClicked.emit(user)
    }
    CreateUsers(name:string , gender : string , subType:string , status:string){
     let user = new User(name , gender , subType , status);
     this.users.push(user);
      this.logger.LogMessage(name,status); 
    }
}