import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})

export class VerifyUserComponent implements OnInit {

  verify = new FormGroup({
      lastName: new FormControl(''),
      email: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
