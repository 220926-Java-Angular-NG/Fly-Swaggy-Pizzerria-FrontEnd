import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  changePassword = this.fb.group({
    
    newPass: ['', Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )],
    confirmPass: ['', Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]
    });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // check() {
  //   if (document.getElementById('newPass').value ==
  //       document.getElementById('confirm').value) {
  //       document.getElementById('message').style.color = 'green';
  //       document.getElementById('message').innerHTML = 'matching';
  //   } else {
  //       document.getElementById('message').style.color = 'red';
  //       document.getElementById('message').innerHTML = 'not matching';
  //   }

  }


