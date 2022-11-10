import { Recipe } from "./Recipe";
import { Sauce, Topping } from "./pizza";
export const SPECALTY: Recipe[] = [
    {
        name: "The Swaggadocious",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.PEPPERONI,
            Topping.BACON,
            Topping.BELL_PEPPERS,
            Topping.JALAPENOS,
            Topping.FS_SEASONING
        ]
    },
    {
        name: "Pepperoni",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.PEPPERONI,
            Topping.BACON
        ]
    },
    {
        name: "Cheese",
        sauce: Sauce.TOMATO,
        toppings:[]
    },
    {
        name: "BBQ Day",
        sauce: Sauce.BBQ,
        toppings:[
            Topping.BACON,
            Topping.CHICKEN
        ]
    },
    {
        name: "Buffalo Chicken",
        sauce: Sauce.BUFFALO,
        toppings:[
            Topping.BACON,
            Topping.CHICKEN
        ]
    },
    {
        name: "Meat Supreme",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.PEPPERONI,
            Topping.BACON,
            Topping.CHICKEN,
            Topping.HAM,
            Topping.SAUSAGE
        ]
    },
    {
        name: "Veggie Deluxe",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.MUSHROOMS,
            Topping.ONIONS,
            Topping.BELL_PEPPERS,
            Topping.JALAPENOS
        ]
    },
    {
        name: "Hawaiian",
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.HAM,
            Topping.BACON,
            Topping.PINEAPPLE
        ]
    },
    {
        name: "White Sauce",
        sauce: Sauce.ALFREDO,
        toppings:[
            Topping.CHICKEN,
            Topping.ONIONS
        ]
    }
]