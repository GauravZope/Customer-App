import { CountryMstFormComponent } from 'src/app/modules/configurator/country-mst/country-mst-form/country-mst-form.component';
import { CountryMstListComponent } from 'src/app/modules/configurator/country-mst/country-mst-list/country-mst-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguratorComponent } from './configurator.component';
import { MatTableComponent } from 'src/app/mat-table/mat-table.component';
import { StateMstListComponent } from 'src/app/modules/configurator/state-mst/state-mst-list/state-mst-list.component';

const routes: Routes = [
  { path: '', component: ConfiguratorComponent },
  { path: 'country-mst-list', component: CountryMstListComponent },
  { path: 'state-mst-list', component: StateMstListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule { }


