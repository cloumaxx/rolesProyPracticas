import { Component } from '@angular/core';
import { SemestreService } from 'src/app/services/SemestreServices/semestre-services.service';

@Component({
  selector: 'app-ver-semestres-oficina-practicas',
  templateUrl: './ver-semestres-oficina-practicas.component.html',
  styleUrls: ['./ver-semestres-oficina-practicas.component.css']
})
export class VerSemestresOficinaPracticasComponent {
  semestres: any[] = [];
  searchText = '';

  constructor(private semestresService: SemestreService) { }

  ngOnInit(): void {
    this.obtenerSemestres();
  }

  obtenerSemestres() {
    this.semestresService.verSemestres().subscribe(
      (data) => {
        this.semestres = data;
      },
      (error) => {
        console.error('Error al obtener los semestres', error);
      }
    );
  }
  matchesFilter(semestre: any): boolean {
    const searchTextLowerCase = this.searchText.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      semestre.numeroSemestre.toLowerCase().includes(searchTextLowerCase) ||
      semestre.fechaFin.toLowerCase().includes(searchTextLowerCase) ||
      semestre.fechaInicio.toLowerCase().includes(searchTextLowerCase)
    );
  }
}

