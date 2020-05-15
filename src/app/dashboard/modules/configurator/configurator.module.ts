import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { ConfiguratorComponent } from './configurator.component';


@NgModule({
  declarations: [ConfiguratorComponent],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule
  ]
})
export class ConfiguratorModule { }
