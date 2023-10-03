import { Component } from '@angular/core';
import { SemestreService } from 'src/app/services/SemestreServices/semestre-services.service';

@Component({
  selector: 'app-formulario-nuevo-semestre',
  templateUrl: './formulario-nuevo-semestre.component.html',
  styleUrls: ['./formulario-nuevo-semestre.component.css']
})
export class FormularioNuevoSemestreComponent {
  añoActual = new Date().getFullYear();
  semestre = {
    fechaInicio: '',
    fechaFin: '',
    numeroSemestre: '',
    vigente: true
  };

  constructor(private semestreService: SemestreService) {}

  onSubmit() {
    this.semestreService.registrarSemestre(this.semestre)
      .subscribe(response => {
        console.log('Semestre registrado con éxito:', response);
        // Puedes redirigir a otra página o realizar otras acciones después de registrar el semestre.
      }, error => {
        console.error('Error al registrar el semestre:', error);
      });
  }
}
