import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})

export class VerifyUserComponent implements OnInit {
  
  @Input() user?: User;
  verifyUser = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitted = false;

  constructor(private fb:FormBuilder, private userService: UserService, private router:Router, private comp: AppComponent) {
   }

  ngOnInit(): void {
    this.verifyUser = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get verify(){
    return this.verifyUser.controls;
  }

  clear() {
    this.verifyUser.patchValue({
      username: this.verify.username.value,
      email: this.verify.email.value 
    });
  }

  onSubmit() { 
    this.submitted = true;
    if (this.verifyUser.valid){
      this.userService.findUserByUsername(`${this.verify.username?.value}`)
    .subscribe((user: User) => this.comp.user = user.username);
    this.router.navigate(['/password-reset']);
    }
  }
  
}
