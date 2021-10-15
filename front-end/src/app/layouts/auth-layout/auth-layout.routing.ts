import { Routes } from '@angular/router';
<<<<<<< HEAD

export const AuthLayoutRoutes: Routes = [
=======
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { ProdutoComponent } from 'src/app/pages/produto/produto.component';

export const AuthLayoutRoutes: Routes = [
        { path: 'produto',      component: ProdutoComponent },
>>>>>>> f03bbeb
        {
                path: 'account',
                loadChildren: () => import('../../pages/account/account.module')
                .then(m => m.AccountModule)
<<<<<<< HEAD
        }
=======
        },
        {path: 'nao-encontrado', component: NotFoundComponent},
        {path: '**', component: NotFoundComponent}
>>>>>>> f03bbeb
];