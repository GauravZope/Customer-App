import { Component, OnInit } from '@angular/core';
import { CountryMstService } from 'src/app/country-mst.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-mst-list',
  templateUrl: './country-mst-list.component.html',
  styleUrls: ['./country-mst-list.component.scss']
})
export class CountryMstListComponent implements OnInit {

  public countries : any;
  constructor(private countryService : CountryMstService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.countryService.getAllCountries().subscribe(res=> console.log(res),err=>console.log(err))
  }

}
