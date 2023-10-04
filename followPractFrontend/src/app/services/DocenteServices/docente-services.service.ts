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

export class DocenteService {
  private baseUrl = 'http://localhost:8080/docentes/';

  constructor( private http: HttpClient ) { }

  getDocentes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
