import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User, updatedUserData } from '../interfaces/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  updatedUserData!: updatedUserData[];
  userID! : string 
  updateUserForm!: FormGroup

  isFormVisible: boolean=true
  // hidden= false
  constructor(private userService:UserService,private formBuilder:FormBuilder){
    this.updateUserForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      profileImage: ['', [Validators.required]]

    });
    
  }

  updateUser(){
    let updatedUser: User = this.updateUserForm.value;
    // updatedUser.userID = this.userID
       console.log(updatedUser);
       
    this.userService.updateUserById(updatedUser).subscribe(
      (response) => {
        console.log(response);
        
        console.log('User updated successfully', response);
        this.updateUserForm.reset();
        this.isFormVisible = false;
      },
      (error) => {
        console.error('Error updating user', error);
      }
    );
  }
}
