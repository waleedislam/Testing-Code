import { User } from "../Models/user";

export class UserService{
    users:User[]=[
        new User('Waleed' , 'male' , 'yearly' , 'active'),
        new User('Waleed' , 'male' , 'yearly' , 'active'),
        new User('Waleed' , 'male' , 'yearly' , 'active'),
    ];

    GetAllUsers(){
        return this.users;
    }

    CreateUsers(name:string , gender : string , subType:string , status:string){
     let user = new User(name , gender , subType , status);
     this.users.push(user);
    }
}