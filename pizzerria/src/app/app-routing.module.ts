import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'', redirectTo: '/menu', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'cart', component:CartComponent},
  {path: 'menu', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
