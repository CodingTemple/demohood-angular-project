import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailLoginComponent } from './email-login/email-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';



@NgModule({
  declarations: [EmailLoginComponent, LoginPageComponent, GoogleSigninDirective],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class UserModule { }
