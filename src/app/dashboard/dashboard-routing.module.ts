import { dashboardComponent } from './dashboard.component';
import { DefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DefaultComponent ,
  children:[
  { path: '', component: dashboardComponent },
  { path: 'configurator',
   loadChildren: () => import('./modules/configurator/configurator.module').then(m => m.ConfiguratorModule) },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class dashboardRoutingModule { }
