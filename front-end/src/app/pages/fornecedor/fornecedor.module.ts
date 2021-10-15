import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NarikCustomValidatorsModule } from '@narik/custom-validators';

import { FornecedorAppComponent } from './fornecedor.app.component';
import { FornecedorRoutingModule } from './fornecedor.route';

import { FornecedorService } from './services/fornecedor.service';

import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    FornecedorAppComponent,
    NovoComponent,
    ListaComponent,
    EditarComponent,
    ExcluirComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NarikCustomValidatorsModule
  ],
  providers: [
    FornecedorService
  ]
})
export class FornecedorModule { }
