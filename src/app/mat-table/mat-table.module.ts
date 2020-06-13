import { MaterialModule } from './../dashboard/matrial-modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableComponent } from './mat-table.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    MatTableComponent,
    
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    MatTableComponent
  ]
})
export class DummyMatTableModule { }
