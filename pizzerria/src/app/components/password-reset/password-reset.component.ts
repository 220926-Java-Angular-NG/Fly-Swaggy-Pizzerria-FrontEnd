import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';



@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  user?: User;
  changePassword = new FormGroup({
    newPass: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]),
    confirmPass: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])
  });

  
  constructor(private fb:FormBuilder, private userService: UserService) { 

    this.changePassword = this.fb.group({
    
      newPass: ['', [Validators.required, Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        )]],
      confirmPass: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get newPassInfo() {
    return this.changePassword.controls;
  }

  submit(){
    if(this.user) {
      this.userService.updateUser(this.user).subscribe();
    }
  }
}



