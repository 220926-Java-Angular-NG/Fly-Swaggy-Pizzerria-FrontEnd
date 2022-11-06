import {Size, Crust} from "./pizza";
import { Recipe } from "./Recipe";

export interface PizzaBox{
    size: Size;
    crust: Crust;
    recipe: Recipe;
    price: number
}

const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency:'USD'
});