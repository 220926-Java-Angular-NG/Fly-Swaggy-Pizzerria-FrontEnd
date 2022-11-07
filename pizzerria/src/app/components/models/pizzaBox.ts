import {Size, Crust} from "./pizza";
import { Recipe } from "./Recipe";
import { Pizza } from "./pizza";

export interface PizzaBox{
    name: String;
    size: Size;
    crust: Crust;
    recipe: Recipe;
    price: number
}