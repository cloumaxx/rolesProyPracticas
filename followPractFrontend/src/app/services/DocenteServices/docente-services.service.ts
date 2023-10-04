import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private baseUrl = 'http://localhost:8080/docente/';

  constructor(private http: HttpClient) { }

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
}
