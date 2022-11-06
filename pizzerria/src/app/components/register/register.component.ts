import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, Validators } from '@angular/forms';
=======
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Location } from '@angular/common';
>>>>>>> 7a6ae2366507567b51f39c2c4feec599979bd610

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
  registerForm = this.fb.group({
    
    firstName: ['', Validators.required],
    lastName: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    });

  constructor(private fb:FormBuilder) { }
=======
  constructor(
    private registerService: RegisterService,
    private location: Location
  ) { }
>>>>>>> 7a6ae2366507567b51f39c2c4feec599979bd610

  ngOnInit(): void {
  }
  onSubmit() {}

}
