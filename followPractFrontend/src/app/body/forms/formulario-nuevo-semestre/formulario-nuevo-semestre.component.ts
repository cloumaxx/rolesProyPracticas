import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SemestreService } from 'src/app/services/SemestreServices/semestre-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-nuevo-semestre',
  templateUrl: './formulario-nuevo-semestre.component.html',
  styleUrls: ['./formulario-nuevo-semestre.component.css']
})
export class FormularioNuevoSemestreComponent {
  semestreData = {
    fechaInicio: '',
    fechaFin: '',
    numeroSemestre: 0,
    vigente: false
  };

  constructor(private semestreService: SemestreService, private toastr: ToastrService) {}
  ngOnInit(): void {
   
  
  }
  crearSemestre() {
    console.log(this.semestreData); 
    this.semestreService.crearSemestre(this.semestreData)
      .subscribe(
        response => {
          console.log(response);
          this.mostrarMensajeExito();

        },
        error => {
          console.error('Error al crear el semestre', error);
          this.mostrarMensajeError();
        }
      );
  }
  mostrarMensajeExito() {
    this.toastr.success('Semestre creado con éxito', 'Éxito');
  }
  mostrarMensajeError() {
    this.toastr.error('Error al crear el semestre', 'Error');
  }
}
