import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
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
formatter = new Intl.NumberFormat('en-US',{
  style: 'currency',
  currency:'USD'
});
  constructor(private cartService:CartService) { }
  Purchase(pizzaBoxes: PizzaBox[]){
    var subtotal:number = 0;
    var pizzas:Pizza[] = [];
    pizzaBoxes.forEach(box => {
      pizzas.push(this.toPizza(box))
      subtotal = subtotal + box.price;
    });
    this.cartService.purchase(pizzas, this.formatter.format(subtotal)).subscribe(
      
    )
  }

  toPizza(pizzaBox: PizzaBox):Pizza{
    let pizza:Pizza
    pizza = {
      size: pizzaBox.size,
      crust: pizzaBox.crust,
      sauce: pizzaBox.recipe.sauce,
      toppings: pizzaBox.recipe.toppings
    }
      return pizza;
  }
  ngOnInit(): void {
    this.pizzas = SPECALTY;
    this.pizzas.forEach(box => { // if the box comes in without price, price it
      if(box.price == 0){
        calculate_price(box)
      }
      if(box.name == ""){ // if the pizza didn't have a name call it custom
        box.name = "Custom"
      }
    })
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
