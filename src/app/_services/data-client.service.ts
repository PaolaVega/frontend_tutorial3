import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';


@Injectable({
  providedIn: 'root'
})


export class DashboardService {

 
 private apiUrl = 'http://localhost:8080/api/test/vitals';


  constructor(private http: HttpClient) { }

  // Devuelve el registro más reciente de un cliente especifico
  getDashboard(userId: number): Observable<any> {
    
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
  
}
