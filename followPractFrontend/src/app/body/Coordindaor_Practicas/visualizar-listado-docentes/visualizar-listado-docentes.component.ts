import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Docente, DocenteServicesService } from 'src/app/services/DocenteServices/docente-services.service';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Docente, DocenteService } from 'src/app/services/DocenteServices/docente-services.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-visualizar-listado-docentes',
  templateUrl: './visualizar-listado-docentes.component.html',
  styleUrls: ['./visualizar-listado-docentes.component.css']
})
export class VisualizarListadoDocentesComponent {
  docentes: Docente[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'acciones'];
  dataSource = new MatTableDataSource<Docente>(this.docentes);

  constructor(private docenteService: DocenteServicesService,
     private router:Router) { }

<<<<<<<
  constructor(private docenteService: DocenteService) { }

=======

>>>>>>>
  ngOnInit() {
    this.obtenerDocentes();
  }

  obtenerDocentes() {
    this.docenteService.verDocentes().subscribe(
      (data: Docente[]) => {
        this.docentes = data;
        this.dataSource.data = this.docentes;
      },
      (error) => {
        console.error('Error al obtener los docentes', error);
      }
    );
  }

  editarDocente(docenteId: number) {
    this.router.navigate(['body/coordinadorPracticas/editar-docente/', docenteId]);
    
    console.log(`Editar docente con ID ${docenteId}`);
  }
  
   
  eliminarDocente(docenteId: number) {
    // Confirmamos con el usuario antes de realizar la eliminación.
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar a este docente?');
    
    if (confirmacion) {
      this.docenteService.eliminarDocente(docenteId).subscribe(
        () => {
          console.log('Docente eliminado con éxito');
          // Vuelve a cargar la lista de docentes después de la eliminación.
          this.obtenerDocentes();
        },
        error => {
          console.error('Error al eliminar el docente', error);
        }
      );
    }
  }
}
