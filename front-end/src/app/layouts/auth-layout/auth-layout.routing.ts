import { Routes } from '@angular/router';
import { ProdutoComponent } from 'src/app/pages/produto/produto.component';

export const AuthLayoutRoutes: Routes = [
        { path: 'produto',      component: ProdutoComponent },
        {
                path: 'account',
                loadChildren: () => import('../../pages/account/account.module')
                .then(m => m.AccountModule)
        },
];