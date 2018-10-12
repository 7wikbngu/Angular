import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumbersCardsService {

  constructor(private http: HttpClient) { }

  getNumber(): any {
    return this.http.get('http://localhost:8080/random');
  }

  getUsers(value): any {
    return this.http.get('http://localhost:8080/users/' + value);
  }
}
