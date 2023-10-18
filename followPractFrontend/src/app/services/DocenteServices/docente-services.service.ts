import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Docente {
  id: number;
  nombre: string;
  apellido: string;
  cedula: number;
  correoPersonal: string;
  correoInstitucional: string;
  contrasena: string;
  fechaNacimiento: Date;
  estado: boolean;
  horasDisponibles: number;
}


@Injectable({
  providedIn: 'root'
})

export class DocenteServicesService {
  private baseUrl = 'http://localhost:8080/docentes/';

  constructor( private http: HttpClient ) { }

  verDocentes(): Observable<any> {
    const url = `${this.baseUrl}docentes_list/`;
    return this.http.get(url);
  }
  registrarDocente(docente: any) {
    const url = `${this.baseUrl}crear_docente/`;

    return this.http.post(url, docente);
  }

  obtenerListaDocentes() {
    const url = `${this.baseUrl}listar_docentes/`;

    return this.http.get(url);
  }

  obtenerDocentePorId(docenteId: number) {
    const url = `${this.baseUrl}obtener_docente/${docenteId}/`;

    return this.http.get(url);
  }

  actualizarDocente(docenteId: number, docente: any) {
    const url = `${this.baseUrl}actualizar_docente/${docenteId}/`;

    return this.http.put(url, docente);
  }

  eliminarDocente(docenteId: number) {
    const url = `${this.baseUrl}eliminar_docente/${docenteId}/`;

    return this.http.delete(url);
  }

  asignarRandomEstudiantes(): Observable<any>{
    const url = `${this.baseUrl}asignar_estudiantes_docentes/`;
    return this.http.post(url, {})
  }

  getAllAsignaciones(): Observable<any>{
    const url = `${this.baseUrl}ver_monitorias`;
    return this.http.get(url);
  }

}
