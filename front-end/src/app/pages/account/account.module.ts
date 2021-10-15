<<<<<<< HEAD
=======
import { LoginComponent } from 'src/app/pages/account/login/login.component';
>>>>>>> f03bbeb
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { AccountService } from './services/account.services';
import { AccountGuard } from './services/account.guard';

import { AccountAppComponent } from './account.app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account.route';
=======
import { NarikCustomValidatorsModule } from '@narik/custom-validators';
import { AccountRoutingModule } from './account.route';
import { AccountAppComponent } from './account.app.component';
import { RegisterComponent } from './register/register.component';

import { AccountService } from './services/account.services';
import { AccountGuard } from './services/account.guard';

>>>>>>> f03bbeb

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
<<<<<<< HEAD
=======
    NarikCustomValidatorsModule
>>>>>>> f03bbeb
  ],
  providers: [
    AccountService,
    AccountGuard
  ]
})
export class AccountModule { }
