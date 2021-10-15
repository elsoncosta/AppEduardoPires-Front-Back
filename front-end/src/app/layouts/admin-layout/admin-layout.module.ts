import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    ClipboardModule,
  ],
  declarations: [
    DashboardComponent,
  ],
<<<<<<< HEAD
  // providers: [
  //   FornecedorService,
  // ]
=======
  providers: []
>>>>>>> f03bbeb
})

export class AdminLayoutModule {}
