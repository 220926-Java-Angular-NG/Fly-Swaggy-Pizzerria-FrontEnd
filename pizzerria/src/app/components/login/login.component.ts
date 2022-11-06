import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username:['', Validators.required, Validators.minLength(5)],
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
    
    localStorage.setItem("username", `${this.loginData.username.value}`);
    localStorage.setItem("password", `${this.loginData.password.value}`);  
    this.userService.login(`${localStorage.getItem('username')} ${localStorage.getItem('password')}`);
    
  }

  register() {
    this.router.navigate(['/register']);
  }

}
