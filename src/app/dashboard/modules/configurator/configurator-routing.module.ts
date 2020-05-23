import { CountryMstFormComponent } from 'src/app/modules/configurator/country-mst/country-mst-form/country-mst-form.component';
import { CountryMstListComponent } from 'src/app/modules/configurator/country-mst/country-mst-list/country-mst-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguratorComponent } from './configurator.component';

const routes: Routes = [
  { path: '', component: ConfiguratorComponent },
  { path: 'country-mst-list', component: CountryMstListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule { }
