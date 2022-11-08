import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])
  });
  submitted = false;
  
  constructor(private fb:FormBuilder, private router:Router, private userService: UserService){}
  
  ngOnInit(): void { 
      this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, 
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]]
    });
  }

   get loginData(){
    return this.loginForm.controls;
  }


  

  onSubmit() { 
    this.submitted = true;
    if (this.loginForm.valid){
      this.userService.login(`${this.loginData.username?.value} ${this.loginData.password?.value}`)
    .subscribe((loggedUser: User) => localStorage.setItem("username", loggedUser.username));
    }
    
  }

  register() {
    this.router.navigate(['/register']);
  }

}
