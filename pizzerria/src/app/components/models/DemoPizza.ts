import { Pizza, Sauce, Size, Crust, Topping} from "./pizza";

export const SPECALTY: Pizza[] = [
    {
    size: Size.SMALL,
    crust: Crust.REGULAR,
    sauce: Sauce.BBQ,
    toppings:[
        Topping.BACON,
        Topping.PEPPERONI
    ]},
    {
        size: Size.LARGE,
        crust: Crust.NO_CRUST,
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.BACON,
            Topping.PEPPERONI
        ]}
]