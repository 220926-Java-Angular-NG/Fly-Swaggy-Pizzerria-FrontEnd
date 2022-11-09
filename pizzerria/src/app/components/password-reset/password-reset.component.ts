import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';



@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  @Input() user!: User;
  changePassword = new FormGroup({
    newPass: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]),
    confirmPass: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')])
  });

  
  constructor(private fb:FormBuilder, private userService: UserService, private router:Router) { 

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

  onSubmit(){
    if(this.newPassInfo.newPass?.value == this.newPassInfo.confirmPass?.value) {
      this.userService.updateUser(this.user).subscribe();
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}



