import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule }              from 'ng2-translate';
import { NgxDatatableModule }   from '@swimlane/ngx-datatable';
import { 
  FormsModule, 
  ReactiveFormsModule 
}                           from "@angular/forms";

// Pipes
import { CommonPipesModule } from '../../../shared/pipes/common-pipes.module';

// NGRX
import { 
  reducers, 
  effects 
}                           from './store';
import { StoreModule }      from '@ngrx/store';
import { EffectsModule }    from '@ngrx/effects';

// Services
import { PermissionService }        from './services/permission.service';
import { PermissionApiClient }      from './services/permission-api-client.service';
import { AccessPermissionSandbox }  from './permission.sandbox';

import { PermissionRoutingModule }  from './permission-routing.module';
import { PermissionComponent }      from './permission.component';
import { SweetAlert2Module }  from '@toverux/ngx-sweetalert2';
import { 
  TooltipModule, 
  BsDropdownModule 
}                             from 'ngx-bootstrap';
import { 
  AngularMultiSelectModule 
}                             from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

// Containers
import { fromContainers } from './containers';

const containers = [
  PermissionComponent,
  ...fromContainers.containers
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxDatatableModule,
    CommonPipesModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    SweetAlert2Module,
    AngularMultiSelectModule,
    PermissionRoutingModule
  ],
  declarations: containers,
  providers: [
    PermissionService,
    PermissionApiClient,
    AccessPermissionSandbox
  ]
})
export class PermissionModule { }
