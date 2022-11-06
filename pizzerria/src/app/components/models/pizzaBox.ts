import {Size, Crust} from "./pizza";
import { Recipe } from "./Recipe";

export interface PizzaBox{
    size: Size;
    crust: Crust;
    recipe: Recipe;
}