import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loggedUser?: User;
  loginForm = this.fb.group({
    username:[''],
    password:['', Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]
  });
  
  constructor(private fb:FormBuilder, private router:Router, private userService: UserService){}
  
  ngOnInit(): void { 

    
   }

   get loginData(){
    return this.loginForm.controls;
  }
  

  login() { 
    this.userService.login(`${this.loginData.username.value} ${this.loginData.password.value}`)
    .subscribe((loggedUser: User) => localStorage.setItem("currentUser", JSON.stringify(loggedUser)));
  }

  register() {
    this.router.navigate(['/register']);
  }

}
