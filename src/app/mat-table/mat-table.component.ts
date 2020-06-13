import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {

  @Output("onAction") emitter = new EventEmitter();
  @Input("data") data  = [];
  dataSource : MatTableDataSource<any>;
  @Input("cols") tableCols = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // We will need this getter to exctract keys from tableCols
  get keys() {
    return this.tableCols.map(({ key }) => key);
  }

  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt, column) {
    return column.config.values[`${elt[column.key]}`];
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
