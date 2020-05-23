
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.url.includes('oauth/token')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.getToken()
        }
      });
    }
    console.log(request.headers)
    return next.handle(request);
  }
}