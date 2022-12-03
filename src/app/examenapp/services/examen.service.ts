import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empDatos } from '../pages/empleados/empleados.component';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  empUrl= "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:luis"
 
 

  constructor( private http: HttpClient ) { }
  getEmp(): Observable<any> {
    return this.http.get<empDatos>(this.empUrl);
  }
 

}
