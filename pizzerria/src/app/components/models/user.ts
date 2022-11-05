import { LoginComponent } from "../login/login.component";

export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    address: string;
    address2: string;
    zipcode: number;
}