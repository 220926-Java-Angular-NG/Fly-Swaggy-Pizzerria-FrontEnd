import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MessagesService } from 'src/app/services/messages.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { UserService } from 'src/app/services/user.service';
import { Demo } from '../models/demo-user';
import { User } from '../models/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

@Input() user?: User; 

editProfileForm: FormGroup;
  

constructor(private fb:FormBuilder) {
  this.editProfileForm = fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    username:['', Validators.required, Validators.minLength(5)],
    password:['', Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )],
      email:['', Validators.required],
      phoneNumber:['', Validators.required],
      address:['', Validators.required],
      address2:['', Validators.required],
      zipCode:['', Validators.required]
  });
   }

ngOnInit(): void {
  this.user = Demo;
  
}

getEditProfileForm(){
    return this.editProfileForm.controls;
}

saveChanges(){

}

}
