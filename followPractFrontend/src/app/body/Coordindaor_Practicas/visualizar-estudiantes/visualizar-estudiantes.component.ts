import { Component } from '@angular/core';
import { EstudianteService } from 'src/app/services/EstudianteServices/estudiante-services.service';

@Component({
  selector: 'app-visualizar-estudiantes',
  templateUrl: './visualizar-estudiantes.component.html',
  styleUrls: ['./visualizar-estudiantes.component.css']
})
export class VisualizarEstudiantesComponent {
  estudiantes: any[] = [];

  constructor(private estudianteService: EstudianteService) { }
 
  ngOnInit() {
   this.obtenerDocentes();
 }
 
  obtenerDocentes() {
   this.estudianteService.verEstudiantes().subscribe(
     (data) => {
       this.estudiantes = data;
     },
     (error) => {
       console.error('Error al obtener los docentes', error);
     }
   );
 }
 }
