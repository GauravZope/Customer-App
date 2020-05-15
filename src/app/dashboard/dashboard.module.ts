import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './matrial-modules';


@NgModule({
  declarations: [ DefaultComponent, HeaderComponent, FooterComponent, SidebarComponent, NoAccessComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class dashboardModule { }
