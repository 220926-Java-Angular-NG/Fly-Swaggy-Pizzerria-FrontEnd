
export interface Pizza{
         size: Size;
         crust: Crust;
         sauce: Sauce;
         toppings: Topping[];

}

export const enum Size{
    SMALL,
    MEDIUM,
    LARGE
}

export const enum Crust{
    REGULAR,
    THIN,
    NO_CRUST
}

export const enum Sauce{
    TOMATO,
    BBQ,
    ALFREDO,
    BUFFALO
}

export const enum Topping{
    PEPPERONI,
    SAUSAGE,
    MUSHROOMS,
    BACON,
    CHICKEN,
    ONIONS,
    BELL_PEPPERS,
    PINEAPPLE,
    JALAPENOS,
    HAM,
    FS_SEASONING
}