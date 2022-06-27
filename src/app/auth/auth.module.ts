import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegPageComponent } from './reg-page/reg-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';


@NgModule({
  declarations: [
    RegPageComponent,
    LoginPageComponent,
    ForgotPassComponent,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports :[AuthModule]
})
export class AuthModule { }
