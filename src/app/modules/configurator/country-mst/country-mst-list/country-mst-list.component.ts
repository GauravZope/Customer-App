import { CountryMstFormComponent } from 'src/app/modules/configurator/country-mst/country-mst-form/country-mst-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryMstService } from 'src/app/country-mst.service';
import { Country } from 'src/app/models/countries.model';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-country-mst-list',
  templateUrl: './country-mst-list.component.html',
  styleUrls: ['./country-mst-list.component.scss']
})
export class CountryMstListComponent implements OnInit {


  displayedColumns: string[] = ['index','countryId', 'countryCode', 'countryName','actions'];
  dataSource : MatTableDataSource<any>;
  public countries: Country[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private countryService : CountryMstService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  private getAll(){
    this.countryService.getAllCountries().subscribe(res=> {
      this.dataSource =new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },err=>console.log(err))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDetails(country){
    console.log(country);
    this.countryService.populateForm(country);
    this.countryService.key = 'Modify Country';
    const dialogRef = this.dialog.open(CountryMstFormComponent, {
      width: '250px',
    });
  }

  onCreate(){
    this.countryService.initializeFormGroup();
    this.countryService.key = 'New Country';
    const dialogRef = this.dialog.open(CountryMstFormComponent, {
      width: '250px',
    });
  }

  onDelete(countryId){
    if(confirm('Are you sure to delete this record ?')){
    this.countryService.deleteCountryRecord(countryId);
    }
  }
}
