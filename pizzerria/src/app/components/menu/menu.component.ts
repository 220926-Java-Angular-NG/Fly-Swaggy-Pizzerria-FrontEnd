import { Component, OnInit } from '@angular/core';
import { SPECALTY } from '../models/SpecaltyRecipes';
import { Recipe } from '../models/Recipe';
import { PizzaBox } from '../models/pizzaBox';
import { Size, Crust } from '../models/pizza';
import { DataService } from 'src/app/services/dataService/data.service';

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
    this.data.sharedata.subscribe(box=>this.boxes=box)
    this.boxes.push(this.boxRecipe(recipe));
    this.data.changedata(this.boxes);
  }
  constructor(private data:DataService) { }

  boxRecipe(recipe:Recipe){
    var box:PizzaBox;
    box={
      crust:this.crust,
      recipe:recipe,
      size:this.size,
      name:recipe.name,
      price:0
    }
    return box;
  }

  ngOnInit(): void {
  }

}
