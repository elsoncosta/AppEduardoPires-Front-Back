import { AccountGuard } from './../../pages/account/services/account.guard';
import { Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/pages/account/register/register.component';
import { LoginComponent } from 'src/app/pages/account/login/login.component';

export const AuthLayoutRoutes: Routes = [
        { path: 'registro', component: RegisterComponent, canActivate: [AccountGuard], canDeactivate: [AccountGuard] },
        { path: 'login', component: LoginComponent, canActivate: [AccountGuard] }
];