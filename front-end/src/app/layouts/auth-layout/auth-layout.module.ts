import { AccountService } from 'src/app/pages/account/services/account.services';
import { ProdutoComponent } from './../../pages/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { LoginComponent } from 'src/app/pages/account/login/login.component';
// import { RegisterComponent } from 'src/app/pages/account/register/register.component';
=======
>>>>>>> f03bbeb

// import { NarikCustomValidatorsModule } from '@narik/custom-validators';
import { AuthLayoutRoutes } from './auth-layout.routing';
<<<<<<< HEAD

// import { AccountService } from 'src/app/pages/account/services/account.services';
// import { AccountGuard } from 'src/app/pages/account/services/account.guard';

@NgModule({
  declarations: [
    // LoginComponent,
    // RegisterComponent
=======
import { AccountGuard } from 'src/app/pages/account/services/account.guard';

@NgModule({
  declarations: [
    ProdutoComponent
>>>>>>> f03bbeb
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgModule,
    RouterModule.forChild(AuthLayoutRoutes),
    HttpClientModule,
<<<<<<< HEAD
    // NarikCustomValidatorsModule
    // NgbModule
  ],
  //   providers: [
  //   AccountService,
  //   AccountGuard
  // ]
=======
    NarikCustomValidatorsModule
  ],
    providers: [
      AccountService,
      AccountGuard
    ]
>>>>>>> f03bbeb
})
export class AuthLayoutModule { }
