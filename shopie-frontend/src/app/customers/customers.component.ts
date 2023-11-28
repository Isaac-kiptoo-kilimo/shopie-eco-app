import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  filter=''
  userID: string=''
  users!: User []

  constructor(private userService: UserService){
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe(users=>{
      this.users=users
      return users
    })
  }    

  deleteUser(userID:string){
    console.log(userID);
    
    this.userService.deleteUser(userID).subscribe((res)=>{
      console.log("user Deleted Successfully");
      this.getUsers()
      
    })
  }


    
  }

