import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(rootRouterConfig)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }