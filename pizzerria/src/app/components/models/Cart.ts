import { ImportedNgModuleProviders } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { Pizza } from "./pizza";

export interface Cart {
    ID: number;
    pizzas: Pizza[]
    total: String;
}