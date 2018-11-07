import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartValuesService {

  constructor(private http: HttpClient) { }

  getValues(): any {
    return this.http.get('http://localhost:8080/analytics/activeUsers');
  }
}
