
export interface Pizza{
         size: Size;
         crust: Crust;
         sauce: Sauce;
         toppings: Topping[];

}

export const enum Size{
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export const enum Crust{
    REGULAR = "REGULAR",
    THIN = "THIN",
    NO_CRUST = "NO_CRUST"
}

export const enum Sauce{
    TOMATO = "TOMATO",
    BBQ = "BBQ",
    ALFREDO = "ALFREDO",
    BUFFALO = "BUFFALO"
}

export const enum Topping{
    PEPPERONI = "PEPPERONI",
    SAUSAGE = "SASUAGE",
    MUSHROOMS = "MUSHROOMS",
    BACON = "BACON",
    CHICKEN = "CHICKEN",
    ONIONS = "ONIONS",
    BELL_PEPPERS = "BELL_PEPPERS",
    PINEAPPLE = "PINEAPPLE",
    JALAPENOS = "JALSPENOS",
    HAM = "HAM",
    FS_SEASONING = "FS_SEASONING"
}