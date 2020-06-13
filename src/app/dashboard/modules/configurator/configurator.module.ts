import { MatTableModule } from '@angular/material/table';
import { MatTableComponent } from './../../../mat-table/mat-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';
import { CountryMstFormComponent } from 'src/app/modules/configurator/country-mst/country-mst-form/country-mst-form.component';
import { CountryMstListComponent } from 'src/app/modules/configurator/country-mst/country-mst-list/country-mst-list.component';
import { MaterialModule } from '../../matrial-modules';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StateMstFormComponent } from 'src/app/modules/configurator/state-mst/state-mst-form/state-mst-form.component';
import { StateMstListComponent } from 'src/app/modules/configurator/state-mst/state-mst-list/state-mst-list.component';
import { DummyMatTableModule } from 'src/app/mat-table/mat-table.module';


@NgModule({
  declarations: [
    ConfiguratorComponent,
    CountryMstListComponent,
    CountryMstFormComponent,
    StateMstFormComponent,
    StateMstListComponent
  ],
  entryComponents: [ CountryMstFormComponent],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule, 
    HttpClientModule,
    // BrowserAnimationsModule,
    // FlexLayoutModule,
    MaterialModule,
    MatTableModule,
    ReactiveFormsModule,
    DummyMatTableModule,
  ]
})
export class ConfiguratorModule { }
