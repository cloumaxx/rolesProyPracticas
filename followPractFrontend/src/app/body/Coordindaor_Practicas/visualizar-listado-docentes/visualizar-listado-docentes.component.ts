import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { DocenteService } from 'src/app/services/DocenteServices/docente-services.service';



@Component({
  selector: 'app-visualizar-listado-docentes',
  templateUrl: './visualizar-listado-docentes.component.html',
  styleUrls: ['./visualizar-listado-docentes.component.css']
})
export class VisualizarListadoDocentesComponent {
docentes: any[] = [];

 constructor(private docenteService: DocenteService) { }

 ngOnInit() {
  this.obtenerDocentes();
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
