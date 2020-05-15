import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public hidePass:boolean = true;
  public rememberMe;
  
  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder){}
  loginForm = this.fb.group({
    userName :[null, Validators.required],
    password :[null, Validators.required]
  })

  onSubmit(){
    let formData = this.loginForm.value;
    this.auth.login(formData.userName, formData.password)
    .pipe(first())
    .subscribe(
      result => this.router.navigate(['dashboard']),
      // err => this.error = 'Could not authenticate'
    );
  }

}
