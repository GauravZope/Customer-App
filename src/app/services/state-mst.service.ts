import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateMstService {

  constructor(private http: HttpClient,) { }

  getAllStates() {
    return this.http.get<any>('http://localhost:8080/states/');
  }
}
