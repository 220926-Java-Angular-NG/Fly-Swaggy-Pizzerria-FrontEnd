import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
    password:['']
  });
  
  constructor(private fb:FormBuilder, private router:Router, private userService: UserService, private comp: AppComponent){}
  
  ngOnInit(): void { 

    
   }

   get loginData(){
    return this.loginForm.controls;
  }
  

  login() { 
    this.userService.login(`${this.loginData.username.value} ${this.loginData.password.value}`)
    .subscribe((loggedUser: User) => this.comp.user = `Welcome: ${loggedUser.username}`);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
