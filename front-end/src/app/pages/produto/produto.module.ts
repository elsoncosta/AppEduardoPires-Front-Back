import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NarikCustomValidatorsModule } from '@narik/custom-validators';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoService } from './services/produto.service';

import { ProdutoAppComponent } from './produto.app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    ProdutoAppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NarikCustomValidatorsModule
  ],
  providers: [
    ProdutoService
  ]
})
export class FornecedorModule { }