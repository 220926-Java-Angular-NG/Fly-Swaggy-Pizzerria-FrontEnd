import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VerifyUserComponent,
    PasswordResetComponent,
    MessagesComponent,
    CartComponent,
    MenuComponent,
    UserProfileComponent,
    LogoutComponent,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
