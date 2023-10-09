import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorServicesService {
  private baseUrl = 'http://localhost:8080/coordinador/';

  constructor(private http: HttpClient) { }
  
  crearCoordinador(programaData: any): Observable<any> {
    const url = `${this.baseUrl}crear_coordinador/`;
    return this.http.post(url, programaData);
  }

  verCoordinadores(): Observable<any> {
    const url = `${this.baseUrl}coordinador_list/`;
    return this.http.get(url);
  }

}
