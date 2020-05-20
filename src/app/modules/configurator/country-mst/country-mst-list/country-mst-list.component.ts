import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryMstService } from 'src/app/country-mst.service';
import { Country } from 'src/app/models/countries.model';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-country-mst-list',
  templateUrl: './country-mst-list.component.html',
  styleUrls: ['./country-mst-list.component.scss']
})
export class CountryMstListComponent implements OnInit {


  displayedColumns: string[] = ['index','countryId', 'countryCode', 'countryName'];
  dataSource : MatTableDataSource<any>;
  public countries: Country[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private countryService : CountryMstService) { }

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
}
