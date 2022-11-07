import { Pizza, Sauce, Size, Crust, Topping} from "./pizza";
import { PizzaBox } from "./pizzaBox";
import { Recipe } from "./Recipe";

export const SPECALTY: PizzaBox[] = [
    {
    size: Size.LARGE,
    name: "",
    crust: Crust.NO_CRUST,
    price:0,
    recipe:{
        name:"",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.BACON,
            Topping.PEPPERONI,
            Topping.FS_SEASONING
        ]}},
    {
    size: Size.MEDIUM,
    name: "",
    crust: Crust.NO_CRUST,
    price:0,
    recipe:{
        name: "",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.BACON,
            Topping.PEPPERONI,
            Topping.HAM,
            Topping.CHICKEN
            ]}},
    {
    size: Size.SMALL,
    name: "",
    crust: Crust.NO_CRUST,
    price:0,
    recipe:{
        name: "",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.BACON,
            Topping.PEPPERONI
        ]}}
]