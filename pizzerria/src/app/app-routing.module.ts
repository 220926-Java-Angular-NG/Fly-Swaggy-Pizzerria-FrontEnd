import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';


const routes: Routes = [
  {path:'', redirectTo: '/menu', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'cart', component:CartComponent},
  {path: 'menu', component:MenuComponent},
  {path:'myProfile', component: UserProfileComponent},
  {path:'password-reset', component: PasswordResetComponent},
  {path:'verify', component: VerifyUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
