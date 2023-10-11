import { Component } from '@angular/core';
import { CoordinadorServicesService } from 'src/app/services/CoordinadorServices/coordinador-services.service';

@Component({
  selector: 'app-ver-coordinadores-oficina-practicas',
  templateUrl: './ver-coordinadores-oficina-practicas.component.html',
  styleUrls: ['./ver-coordinadores-oficina-practicas.component.css']
})
export class VerCoordinadoresOficinaPracticasComponent {
  coordinadores: any[] = [];
  searchText = '';

  constructor(private coordinadorService: CoordinadorServicesService) { }

  ngOnInit(): void {
    this.obtenerSemestres();
  }

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
  matchesFilter(coordinador: any): boolean {
    const searchTextLowerCase = this.searchText.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      coordinador.nombre.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.apellido.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.cedula.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.correoPersonal.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.correoInstitucional.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.fechaNacimiento.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.estado.toLowerCase().includes(searchTextLowerCase)
   
    );
  }/*
    matchesFilter(semestre: any): boolean {
    const searchTextLowerCase = this.searchText.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      semestre.numeroSemestre.toLowerCase().includes(searchTextLowerCase) ||
      semestre.fechaFin.toLowerCase().includes(searchTextLowerCase) ||
      semestre.fechaInicio.toLowerCase().includes(searchTextLowerCase)
    );
  }
  */
}
