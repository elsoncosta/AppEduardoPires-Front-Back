import { ProdutoAppComponent } from './produto.app.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';


const rootRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: 'index', component: IndexComponent },
            { path: 'create', component: CreateComponent },
            { path: 'edit/:id', component: EditComponent },
            { path: 'details/:id', component: DetailsComponent },
            { path: 'delete/:id', component: DeleteComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(rootRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }