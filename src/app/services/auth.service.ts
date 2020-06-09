import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/user-model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
 
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization':'Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA='
    })
  };
  
  login(userName, password):Observable<boolean>{
    const body = new HttpParams()
      .set('username', userName)
      .set('password', password)
      .set('grant_type', 'password');

    return this.http.post<any>('http://localhost:8081/oauth/token',body,this.httpOptions)
    .pipe(map(result => {
      localStorage.setItem('token',result.access_token);
      return true;
    }));
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {

    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)
      return false;
    let isExipred = jwtHelper.isTokenExpired(token);
    return !isExipred;
  }

  public get currentUser(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)
      return null;
    let userName = jwtHelper.decodeToken(token).user_name;
    return this.http.get<any>('http://localhost:8081/oauth/user',{
      params: {
        username: userName}
      });
  }

  public get userAuthorities(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)
      return null;
    let user = jwtHelper.decodeToken(token);
    if(user != null && user.authorities != null)
      return user.authorities;
    return null
  }
  
}
