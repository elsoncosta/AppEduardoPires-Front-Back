import { Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
        {
                path: 'account',
                loadChildren: () => import('../../pages/account/account.module')
                .then(m => m.AccountModule)
        }
];