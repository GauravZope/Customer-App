import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';
import { CountryMstFormComponent } from 'src/app/modules/configurator/country-mst/country-mst-form/country-mst-form.component';
import { CountryMstListComponent } from 'src/app/modules/configurator/country-mst/country-mst-list/country-mst-list.component';
import { MaterialModule } from '../../matrial-modules';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfiguratorComponent,
    CountryMstListComponent,
    CountryMstFormComponent,
  ],
  entryComponents: [ CountryMstFormComponent],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule, 
    HttpClientModule,
    // BrowserAnimationsModule,
    // FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ConfiguratorModule { }
