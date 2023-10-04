import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import  { Docente, DocenteService } from '../../services/DocenteServices/docente-services.service';


@Component({
  selector: 'app-visualizar-listado-docentes',
  templateUrl: './visualizar-listado-docentes.component.html',
  styleUrls: ['./visualizar-listado-docentes.component.css']
})
export class VisualizarListadoDocentesComponent {
 displayedColumns : string[] = ['id', 'nombre', 'apellido', 'cedula', 'correoPersonal', 'correoInstitucional', 'contraseña', 'fechaNacimiento', 'estado', 'horasDisponibles']; 
 
 docentes_list = new MatTableDataSource<Docente>();

 constructor(private docenteService: DocenteService) { }

 ngOnInit() {
  this.docenteService.getDocentes().subscribe(docentes => this.docentes_list.data = docentes);
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.docentes_list.filter = filterValue.trim().toLowerCase();
 }
}
