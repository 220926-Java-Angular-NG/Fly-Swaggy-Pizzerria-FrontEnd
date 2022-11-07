import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
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
  

constructor(private fb:FormBuilder, private userService: UserService) {
  this.editProfileForm = fb.group({
    firstName:[''],
    lastName:[''],
    username:[''],
    password:[''],
      email:[''],
      phoneNumber:[''],
      address:[''],
      address2:[''],
      zipCode:['']
  });
   }

ngOnInit(): void {
  this.userService.findUser(`${localStorage.getItem("userID")}`).subscribe(init=>this.user=init);
  
}

getEditProfileForm(){
    return this.editProfileForm.controls;
}

saveChanges(): void {
  if(this.user) {
    this.userService.updateUser(this.user).subscribe();
    console.log(this.user.zipCode);
  }
}


}
