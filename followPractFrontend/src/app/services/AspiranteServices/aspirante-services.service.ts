import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AspiranteServicesService {
  private baseUrl = 'http://localhost:8080/aspirantes/';

  constructor(private http: HttpClient) { }
  cargarArchivoExcel(archivo: File, semestre:string): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('semestre', semestre);
    
    const url = `${this.baseUrl}crear_por_listado_aspirantes/`;

    return this.http.post(url, formData);
  }

  visualizarListado(semestre:string): Observable<any> {
   // const formData = new FormData();
   // formData.append('semestre', semestre);
    
    const url = `${this.baseUrl}tablaCompletaPracticas_list/` + semestre;

    return this.http.get(url);
  }
}
