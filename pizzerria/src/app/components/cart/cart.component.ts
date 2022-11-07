import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/dataService/data.service';
import { SPECALTY } from '../models/DemoPizza';
import { Pizza, Size} from '../models/pizza';
import { PizzaBox } from '../models/pizzaBox';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

pizzas: PizzaBox[] = []

  constructor(private cartService:CartService, private data:DataService) { }
  Purchase(pizzaBoxes: PizzaBox[]){
    var subtotal:number = 0;
    var pizzas:Pizza[] = [];
    pizzaBoxes.forEach(box => {
      pizzas.push(this.toPizza(box))
      subtotal = subtotal + box.price;
    });
    this.cartService.purchase(pizzas, this.formatter.format(subtotal)).subscribe() // todo: eventually handel not being able to recieve pizza
  }

  ngOnInit(): void {
    this.data.sharedata.subscribe(box=>this.pizzas=box)
    this.pizzas.forEach(box => { // if the box comes in without price, price it
      if(box.price == 0){
        calculate_price(box)
      }
      if(box.name == ""){ // if the pizza didn't have a name call it custom
        box.name = "Custom"
      }
    })
  }

  formatter = new Intl.NumberFormat('en-US',{ // formats price to be displayed
    style: 'currency',
    currency:'USD'
  });

  toPizza(pizzaBox: PizzaBox):Pizza{ // unboxes pizza box to plain pizza for database
    let pizza:Pizza
    pizza = {
      size: pizzaBox.size,
      crust: pizzaBox.crust,
      sauce: pizzaBox.recipe.sauce,
      toppings: pizzaBox.recipe.toppings
    }
      return pizza;
  }
}

function calculate_price(Box:PizzaBox){
  Box.price = 0;
  switch(Box.size){
      case Size.LARGE:{
          Box.price = Box.price + 20;
          break;
      }
      case Size.MEDIUM:{
          Box.price = Box.price + 15;
          break;
      }
      case Size.SMALL:{
          Box.price = Box.price + 10;
          break;
      }
  }
  if(Box.recipe.toppings.length > 3){
      Box.price = Box.price + Box.recipe.toppings.length*0.75;
  }
}
