import {Sauce,Topping} from "./pizza";
export interface Recipe{
    name: String;
    sauce: Sauce;
    toppings: Topping[];
}