import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    
    firstName: ['', Validators.required],
    lastName: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {}

}
