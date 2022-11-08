import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [Validators.pattern('[0-9]{10}') ,Validators.maxLength(10)]),
    address: new FormControl(''),
    address2: new FormControl(''),
    zipCode: new FormControl('')
  })

  submitted = false;

  constructor(private fb:FormBuilder, private router:Router, private userService: UserService) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email],
      phoneNumber: ['', [Validators.pattern('[0-9]{10}') ,Validators.maxLength(10)]],
      address: [''],
      address2: [''],
      zipCode:['']
    });

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
    this.router.navigate(['/login']);
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
