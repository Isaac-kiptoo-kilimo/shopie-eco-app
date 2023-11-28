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
    
  }

