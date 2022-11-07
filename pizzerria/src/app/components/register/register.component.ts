import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() newUser?: User;
  submitted = false;

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: [''],
    address: [''],
    address2: [''],
    zipCode:['']
  });

  constructor(private fb:FormBuilder, private router:Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  get f() {
    return this.registerForm.controls;
  }



  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.newUser = {
        userId: 0,
        username: `${this.f.username.value}`, 
        password: `${this.f.password.value}`,
        firstName: `${this.f.firstName.value}`,
        lastName: `${this.f.lastName.value}`,
        email: `${this.f.email.value}`,
        phoneNumber: `${this.f.phoneNumber.value}`,
        address: `${this.f.address.value}`,
        address2: `${this.f.address2.value}`,
        zipCode: `${this.f.zipCode.value}`
      }
    
    this.userService.register(this.newUser).subscribe();
    this.clear();
    this.registerForm.disable();
    console.log(this.newUser);
    } else {
      return;
    }
    
  }

  login() {
    this.router.navigate(['/login']);
  }

  clear()
  {
    this.registerForm.patchValue({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      address2: '',
      zipCode:''
    });
  }
}
