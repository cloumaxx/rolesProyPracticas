import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SemestreService } from 'src/app/services/SemestreServices/semestre-services.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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

  constructor(private semestreService: SemestreService, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
   
  
  }
  crearSemestre() {
    console.log(this.semestreData); 
    this.semestreService.crearSemestre(this.semestreData)
      .subscribe(
        response => {
          console.log(response);
          this.mostrarMensaje('Semestre creado correctamente', 'success');


        },
        error => {
          console.error('Error al crear el semestre', error);
          this.mostrarMensaje('Error al crear el semestre', 'error');

        }
      );
  }

  mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
    const config = new MatSnackBarConfig();
    config.duration = 5000; // Duración del mensaje en milisegundos (5 segundos en este caso)
  
    if (tipo === 'success') {
      config.panelClass = ['success-snackbar']; // Estilo para mensajes de éxito (definir en tus estilos CSS)
    } else {
      config.panelClass = ['error-snackbar']; // Estilo para mensajes de error (definir en tus estilos CSS)
    }
  
    this.snackBar.open(mensaje, '', config);
  }
  /*
  mostrarMensajeExito() {
    this.toastr.success('Semestre creado con éxito', 'Éxito');
  }
  mostrarMensajeError() {
    this.toastr.error('Error al crear el semestre', 'Error');
  }*/
}
