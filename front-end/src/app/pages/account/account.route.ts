import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

import { AccountGuard } from './../../pages/account/services/account.guard';

import { RegisterComponent } from 'src/app/pages/account/register/register.component';
import { LoginComponent } from 'src/app/pages/account/login/login.component';
import { AccountAppComponent } from './account.app.component';

const accountRouterConfig: Routes = [
    {
        path: '', component: AccountAppComponent,
        children: [
            { path: 'registro', component: RegisterComponent, canActivate: [AccountGuard], canDeactivate: [AccountGuard] },
            { path: 'login', component: LoginComponent, canActivate: [AccountGuard] }
=======
import { AccountAppComponent } from './account.app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountGuard } from './services/account.guard';

const rootRouterConfig: Routes = [
    {
        path: '', component: AccountAppComponent,
        children: [
        // { path: 'registro', component: RegisterComponent, canActivate: [AccountGuard], canDeactivate: [AccountGuard] },
        // { path: 'login', component: LoginComponent, canActivate: [AccountGuard] }
        { path: 'registro', component: RegisterComponent},
        { path: 'login', component: LoginComponent}
>>>>>>> f03bbeb
        ]
    }
];

@NgModule({
    imports: [
<<<<<<< HEAD
        RouterModule.forChild(accountRouterConfig)
=======
        RouterModule.forChild(rootRouterConfig)
>>>>>>> f03bbeb
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }