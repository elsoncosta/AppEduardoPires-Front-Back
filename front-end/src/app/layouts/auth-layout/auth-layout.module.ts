import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { LoginComponent } from 'src/app/pages/account/login/login.component';
// import { RegisterComponent } from 'src/app/pages/account/register/register.component';

// import { NarikCustomValidatorsModule } from '@narik/custom-validators';
import { AuthLayoutRoutes } from './auth-layout.routing';

// import { AccountService } from 'src/app/pages/account/services/account.services';
// import { AccountGuard } from 'src/app/pages/account/services/account.guard';

@NgModule({
  declarations: [
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgModule,
    RouterModule.forChild(AuthLayoutRoutes),
    HttpClientModule,
    // NarikCustomValidatorsModule
    // NgbModule
  ],
  //   providers: [
  //   AccountService,
  //   AccountGuard
  // ]
})
export class AuthLayoutModule { }
