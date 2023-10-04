import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private baseUrl = 'http://localhost:8080/semestre/';

  constructor(private http: HttpClient) { }
  
  registrarSemestre(semestre: any) {
    const url = `${this.baseUrl}crear_sesmestre/`;

    return this.http.post(url, semestre);
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
