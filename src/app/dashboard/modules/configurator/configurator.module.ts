import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';
import { CountryMstFormComponent } from 'src/app/modules/configurator/country-mst/country-mst-form/country-mst-form.component';
import { CountryMstListComponent } from 'src/app/modules/configurator/country-mst/country-mst-list/country-mst-list.component';
import { CountryMstEditComponent } from 'src/app/modules/configurator/country-mst/country-mst-edit/country-mst-edit.component';


@NgModule({
  declarations: [
    ConfiguratorComponent,
    CountryMstListComponent,
    CountryMstFormComponent,
    CountryMstEditComponent
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule
  ]
})
export class ConfiguratorModule { }
