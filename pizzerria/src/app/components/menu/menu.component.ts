import { Component, OnInit } from '@angular/core';
import { SPECALTY } from '../models/SpecaltyRecipes';
import { Recipe } from '../models/Recipe';
import { PizzaBox } from '../models/pizzaBox';
import { Size, Crust } from '../models/pizza';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  specals: Recipe[] = SPECALTY;
  size: Size = Size.SMALL;
  crust: Crust = Crust.REGULAR;
  add(recipe:Recipe){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
