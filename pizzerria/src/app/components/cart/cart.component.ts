import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { SPECALTY } from '../models/DemoPizza';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

pizzas: Pizza[] = []

  constructor(private cartService:CartService) { }
  Purchase(pizzas: Pizza[]){
    this.cartService.purchase(pizzas).subscribe(
      
    )
  }
  ngOnInit(): void {
    this.pizzas = SPECALTY;
  }

}
