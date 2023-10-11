import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
import { Docente, DocenteService } from 'src/app/services/DocenteServices/docente-services.service';



@Component({
  selector: 'app-visualizar-listado-docentes',
  templateUrl: './visualizar-listado-docentes.component.html',
  styleUrls: ['./visualizar-listado-docentes.component.css'],
  // standalone: true,
  // imports: [MatFormFieldModule, MatTableModule, MatInputModule]
})
export class VisualizarListadoDocentesComponent {
  displayedColumns : string[] = ['id', 'nombre', 'apellido', 'cedula', 'correoPersonal', 'correoInstitucional', 'contraseña', 'fechaNacimiento', 'estado', 'horasDisponibles']; 
  docentes: any[] = [];

  docentes_list = new MatTableDataSource<Docente>();

  constructor(private docenteService: DocenteService) { }

  ngOnInit() {
   this.obtenerDocentes();
   this.docenteService.verDocentes().subscribe(docentes => this.docentes_list.data = docentes);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.docentes_list.filter = filterValue.trim().toLowerCase();
  }

  obtenerDocentes() {
    this.docenteService.verDocentes().subscribe(
      (data) => {
        this.docentes = data;
      },
      (error) => {
        console.error('Error al obtener los docentes', error);
      }
    );
  }

}