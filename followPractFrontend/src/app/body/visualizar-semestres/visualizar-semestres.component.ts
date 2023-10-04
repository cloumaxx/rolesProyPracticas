import { Component } from '@angular/core';
import { SemestreService } from 'src/app/services/SemestreServices/semestre-services.service';

@Component({
  selector: 'app-visualizar-semestres',
  templateUrl: './visualizar-semestres.component.html',
  styleUrls: ['./visualizar-semestres.component.css']
})
export class VisualizarSemestresComponent {
  semestres: any[] = [];

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
}
