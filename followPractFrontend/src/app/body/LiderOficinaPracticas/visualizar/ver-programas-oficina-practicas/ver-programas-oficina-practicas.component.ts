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
    this.obtenerPrograma();
    console.log(this.programas);
  }

  obtenerPrograma() {
    this.programasService.verProgramas().subscribe(
      (data) => {
        this.programas = data;
      },
      (error) => {
        console.error('Error al obtener los progrmas', error);
      }
    );
  }

  /*
  obtenerSemestres() {
    this.coordinadorService.verCoordinadores().subscribe(
      (data) => {
        this.coordinadores = data;
      },
      (error) => {
        console.error('Error al obtener los coordinadores', error);
      }
    );
  }
  */
  matchesFilter(programa: any): boolean {
    const searchTextLowerCase = this.searchText.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      programa.programaNombre.toLowerCase().includes(searchTextLowerCase) ||
      programa.programaCodigo.toLowerCase().includes(searchTextLowerCase) ||
      programa.idCoordinador.toString().toLowerCase().includes(searchTextLowerCase)
    );
  }
}

