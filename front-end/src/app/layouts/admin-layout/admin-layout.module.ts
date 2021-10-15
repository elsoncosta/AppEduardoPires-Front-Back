import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NovoComponent } from 'src/app/pages/fornecedor/novo/novo.component';
import { ListaComponent } from 'src/app/pages/fornecedor/lista/lista.component';
import { EditarComponent } from 'src/app/pages/fornecedor/editar/editar.component';
import { ExcluirComponent } from 'src/app/pages/fornecedor/excluir/excluir.component';
import { DetalhesComponent } from 'src/app/pages/fornecedor/detalhes/detalhes.component';
import { FornecedorService } from 'src/app/pages/fornecedor/services/fornecedor.service';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    DashboardComponent,
    NovoComponent,
    ListaComponent,
    EditarComponent,
    ExcluirComponent,
    DetalhesComponent
  ],
  providers: [
    FornecedorService,
  ]
})

export class AdminLayoutModule {}
