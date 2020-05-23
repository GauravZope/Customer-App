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
    return this.http.get<any>('/api/countries/getAll');
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
    return this.http.delete(`/api/countries/${countryId}`);
  }

  saveCountryMasterDetails(value: Country) {
    console.log("Saving country master details")
    return this.http.post('/api/countries/',value);
  }

  updateCountryMasterDetails(value: Country) {
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    if(value.countryId != null && value.countryId != 0){
      const countryId = value.countryId;
      return this.http.put(`/api/countries/${countryId}`,value,httpOptions);
    }else{
      throw Error("Country Id not found for record")
    }
  }
}
