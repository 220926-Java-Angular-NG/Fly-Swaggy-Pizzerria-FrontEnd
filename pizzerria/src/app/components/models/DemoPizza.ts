import { Pizza, Sauce, Size, Crust, Topping} from "./pizza";

export const SPECALTY: Pizza[] = [
    {
    size: Size.SMALL,
    crust: Crust.REGULAR,
    sauce: Sauce.BBQ,
    toppings:[
        Topping.BACON,
        Topping.PEPPERONI,
        Topping.HAM
    ]},
    {
        size: Size.LARGE,
        crust: Crust.NO_CRUST,
        sauce: Sauce.TOMATO,
        toppings:[
            Topping.BACON,
            Topping.PEPPERONI,
            Topping.FS_SEASONING
        ]},
        {
            size: Size.MEDIUM,
            crust: Crust.NO_CRUST,
            sauce: Sauce.TOMATO,
            toppings:[
                Topping.BACON,
                Topping.PEPPERONI,
                Topping.FS_SEASONING
            ]}
]