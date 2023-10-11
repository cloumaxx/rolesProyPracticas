import { Component } from '@angular/core';
import { ProgramaServicesService } from 'src/app/services/ProgramaServices/programa-services.service';

@Component({
  selector: 'app-ver-programas-oficina-practicas',
  templateUrl: './ver-programas-oficina-practicas.component.html',
  styleUrls: ['./ver-programas-oficina-practicas.component.css']
})
export class VerProgramasOficinaPracticasComponent {
  programas: any[] = [];
  searchText = '';

  constructor(private programasService: ProgramaServicesService) { }

  ngOnInit(): void {
    this.obtenerSemestres();
  }

  obtenerSemestres() {
    this.programasService.verProgramas().subscribe(
      (data) => {
        this.programasService = data;
      },
      (error) => {
        console.error('Error al obtener los semestres', error);
      }
    );
  }
  matchesFilter(programa: any): boolean {
    const searchTextLowerCase = this.searchText.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      programa.numeroSemestre.toLowerCase().includes(searchTextLowerCase) ||
      programa.fechaFin.toLowerCase().includes(searchTextLowerCase) ||
      programa.fechaInicio.toLowerCase().includes(searchTextLowerCase)
    );
  }
}
