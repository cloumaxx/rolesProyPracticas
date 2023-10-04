import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private baseUrl = 'http://localhost:8080/semestre/';

  constructor(private http: HttpClient) { }
  
  crearSemestre(semestreData: any): Observable<any> {
    const url = `${this.baseUrl}crear_semestre/`;
    return this.http.post(url, semestreData);
  }
  verSemestres(): Observable<any> {
    const url = `${this.baseUrl}semestres_list/`;
    return this.http.get(url);
  }

  /*
   cargarArchivoExcel(archivo: File, semestre:string): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('semestre', semestre);
    
    const url = `${this.baseUrl}crear_por_listado_estudiantes/`;

    return this.http.post(url, formData);
  */
}
