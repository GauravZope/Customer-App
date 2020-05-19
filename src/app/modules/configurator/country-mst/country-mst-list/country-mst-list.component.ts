import { Component, OnInit } from '@angular/core';
import { CountryMstService } from 'src/app/country-mst.service';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/models/countries.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-mst-list',
  templateUrl: './country-mst-list.component.html',
  styleUrls: ['./country-mst-list.component.scss']
})
export class CountryMstListComponent implements OnInit {

  public countries: Country[] = [];
  constructor(private countryService : CountryMstService) { }

  ngOnInit(): void {
    this.getAll();
  }

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  private getAll(){
    this.countryService.getAllCountries().subscribe(res=> {
      console.log(res);
      this.countries = res;
    },err=>console.log(err))
  }

}
