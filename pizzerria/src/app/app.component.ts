import { Component } from '@angular/core';
import { DataService } from './services/dataService/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fly and Swaggy Pizzeria';
  user = localStorage.getItem("token")
}
