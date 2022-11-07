import { Component, OnInit } from '@angular/core';
import { SPECALTY } from '../models/SpecaltyRecipes';
import { Recipe } from '../models/Recipe';
import { PizzaBox } from '../models/pizzaBox';
import { Size, Crust } from '../models/pizza';
import { DataService } from 'src/app/services/dataService/data.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  specals: Recipe[] = SPECALTY;
  size: Size = Size.SMALL;
  crust: Crust = Crust.REGULAR;
  boxes: PizzaBox[] = [];

  add(recipe:Recipe){
    this.data.sharedata.subscribe(box=>this.boxes=box) // get data
    this.boxes.push(this.boxRecipe(recipe)); // add pizza
    this.data.changedata(this.boxes); // push data
  }
  constructor(private data:DataService) { }

  boxRecipe(recipe:Recipe){
    var box:PizzaBox;
    var price;
    switch(this.size){
      case Size.LARGE:{
          price = 18;
          break;
      }
      case Size.MEDIUM:{
          price = 13
          break;
      }
      case Size.SMALL:{
          price = 8
          break;
      }
  }
    box={
      crust:this.crust,
      recipe:recipe,
      size:this.size,
      name:recipe.name,
      price:price
    }
    return box;
  }


  formatter = new Intl.NumberFormat('en-US',{ // formats price to be displayed
    style: 'currency',
    currency:'USD'
  });

  ngOnInit(): void {
  }

}
