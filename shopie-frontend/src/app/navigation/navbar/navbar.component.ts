import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  showProfileDropdown: boolean = false;
 filter=''

  constructor(private router: Router, private authService: AuthService, private formBuilder:FormBuilder) {
    this.loggedIn = authService.isLoggedIn();
  }

  loggedInTrue = localStorage.getItem('loggedIn')

  // loggedIn = this.loggedInTrue

  ngOnInit(): void {
  
  }

  checkLoggedIn(){

    console.log(this.loggedInTrue);
    if(this.loggedInTrue == 'true'){
     
    }
  }

  
 

  logout() {
    this.router.navigate(['']);
    localStorage.clear();
    this.loggedIn = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }
}
