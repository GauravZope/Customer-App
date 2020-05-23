import { Router } from '@angular/router';
import { CountryMstService } from 'src/app/country-mst.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-mst-form',
  templateUrl: './country-mst-form.component.html',
  styleUrls: ['./country-mst-form.component.scss']
})
export class CountryMstFormComponent implements OnInit {

  constructor(public service : CountryMstService,
    public dialogRef: MatDialogRef<CountryMstFormComponent>,
    private router : Router,
    public location: Location) { }

  ngOnInit(): void {
  }

  
  
  get countryName(){
    return this.service.countryMstForm.get('countryName');
  }

  onSubmit(){
    console.log(this.service.countryMstForm.value);
    if(this.service.key == 'New Country')
      this.service.saveCountryMasterDetails(this.service.countryMstForm.value).subscribe(
        res=> {
          this.location.back
          console.log(res);
          this.refresh()},
        err => console.log(err)
      );
    else
      this.service.updateCountryMasterDetails(this.service.countryMstForm.value).subscribe(
        res=> console.log(res),
        err => console.log(err)
      );
    this.onClose();
    // this.router.navigate(["dashboard/configurator/country-mst-list"]);
  }

  onClose() {
    this.dialogRef.close();
    this.service.countryMstForm.reset();
    this.service.initializeFormGroup();
    // this.router.navigate(['dashboard/configurator/country-mst-list'])
  }

  refresh(){
    this.router.navigateByUrl('dashboard/configurator/country-mst-list',{skipLocationChange : true}).then(()=>{
      console.log(this.location.path())
      this.router.navigate([decodeURI(this.location.path())]);
    })
  }
}