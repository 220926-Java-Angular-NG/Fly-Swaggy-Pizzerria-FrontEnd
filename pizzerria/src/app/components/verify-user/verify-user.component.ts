import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})

export class VerifyUserComponent implements OnInit {
  
  verifyUser = this.fb.group({
    lastName: '',
    email: ''
 });

  constructor(
    private fb:FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  // onClickSubmit(data: string) {this.email = data.email;}
}
