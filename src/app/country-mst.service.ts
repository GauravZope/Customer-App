import { Country } from 'src/app/models/countries.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { commonValidator } from './shared/validators/common.validator';

@Injectable({
  providedIn: 'root'
})
export class CountryMstService {


  constructor(private http: HttpClient, private fb: FormBuilder) { }

  private $key: string;
  private headers = new HttpHeaders().set('access-control-allow-origin',"*");
  get key() {
    return this.$key;
  }
  set key(str) {
    this.$key = str;
  }
  countryMstForm: FormGroup = this.fb.group({
    countryId: [''],
    countryName: ['', [Validators.required]],
    countryCode: ['', [Validators.required, Validators.maxLength(3), commonValidator.cannotContainSpace]]
  })

  initializeFormGroup() {
    this.countryMstForm.setValue({
      countryId: null,
      countryName: '',
      countryCode: ''
    });
  }

  getAllCountries() {
    return this.http.get<any>('http://localhost:8080/countries/');
  }

  populateForm(country: Country) {
    this.countryMstForm.setValue({
      countryId: country.countryId,
      countryName: country.countryName,
      countryCode: country.countryCode
    });
  }

  deleteCountryRecord(countryId) {
    console.log("record deleted successfully!!!")
    return this.http.delete(`http://localhost:8080/countries/${countryId}`);
  }

  saveCountryMasterDetails(value: Country) {
    console.log("Saving country master details")
    return this.http.post('http://localhost:8080/countries/',value);
  }

  updateCountryMasterDetails(value: Country) {
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    if(value.countryId != null && value.countryId != 0){
      const countryId = value.countryId;
      return this.http.put(`http://localhost:8080/countries/${countryId}`,value,httpOptions);
    }else{
      throw Error("Country Id not found for record")
    }
  }
}
