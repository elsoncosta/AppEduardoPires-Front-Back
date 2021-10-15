import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(accountRouterConfig)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }