import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountService } from './services/account.services';
import { AccountGuard } from './services/account.guard';

import { AccountAppComponent } from './account.app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account.route';

@NgModule({
  declarations: [
    AccountAppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AccountService,
    AccountGuard
  ]
})
export class AccountModule { }
