import { Component } from '@angular/core';
import { EstudianteService } from 'src/app/services/EstudianteServices/estudiante-services.service';

@Component({
  selector: 'app-visualizar-estudiantes',
  templateUrl: './visualizar-estudiantes.component.html',
  styleUrls: ['./visualizar-estudiantes.component.css']
})
export class VisualizarEstudiantesComponent {
  estudiantes: any[] = [];
  searchText = '';

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit() {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this.estudianteService.verEstudiantes().subscribe(
      (data) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al obtener los estudiantes', error);
      }
    );
  }

  matchesFilter(estudiante: any): boolean {
    const searchTextLowerCase = this.searchText.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      estudiante.nombre.toLowerCase().includes(searchTextLowerCase) ||
      estudiante.codigo.toLowerCase().includes(searchTextLowerCase)
    );
  }
}
