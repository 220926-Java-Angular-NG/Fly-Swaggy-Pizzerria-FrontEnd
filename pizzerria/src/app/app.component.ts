import { Component } from '@angular/core';
import { User } from './components/models/user';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fly and Swaggy Pizzeria';
  user = "";

  demoUser: User = {
    userId: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    address2: '',
    zipCode:''
  };
 
}
