import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramaServicesService {
  private baseUrl = 'http://localhost:8080/programas/';

  constructor(private http: HttpClient) { }
  
  crearPrograma(programaData: any): Observable<any> {
    const url = `${this.baseUrl}crear_programa/`;
    return this.http.post(url, programaData);
  }

}
