import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { EditarComponent } from 'src/app/pages/fornecedor/editar/editar.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
// import { TablesComponent } from '../../pages/tables/tables.component';
// import { DataBindingComponent } from '../../pages/data-binding/data-binding.component';

// import { ExcluirComponent } from './../../pages/fornecedor/excluir/excluir.component';
// import { DetalhesComponent } from './../../pages/fornecedor/detalhes/detalhes.component';
// import { NovoComponent } from './../../pages/fornecedor/novo/novo.component';
// import { ListaComponent } from './../../pages/fornecedor/lista/lista.component';
import { FornecedorAppComponent } from 'src/app/pages/fornecedor/fornecedor.app.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'data-binding',   component: DataBindingComponent },
    { path: 'fornecedor',      component: FornecedorAppComponent },
    // {
    //     path: '',
    //     children: [
    //         { path: 'listar-todos', component: ListaComponent },
    //         { path: 'adicionar-novo', component: NovoComponent },
    //         { path: 'editar/:id', component: EditarComponent },
    //         { path: 'detalhes/:id', component: DetalhesComponent },
    //         { path: 'excluir/:id', component: ExcluirComponent }
    //     ]
    // }
];
