import { AccountService } from 'src/app/pages/account/services/account.services';
import { ProdutoComponent } from './../../pages/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NarikCustomValidatorsModule } from '@narik/custom-validators';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { AccountGuard } from 'src/app/pages/account/services/account.guard';

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NarikCustomValidatorsModule
  ],
    providers: [
      AccountService,
      AccountGuard
    ]
})
export class AuthLayoutModule { }