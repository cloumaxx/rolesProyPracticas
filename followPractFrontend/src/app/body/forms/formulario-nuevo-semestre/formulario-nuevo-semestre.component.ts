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
    numeroSemestre: '',
    vigente: false
  };
  semestreSeleccionado: string = '';
  year: number = 2022;
  semester: string = '01';
  notificationMessage: string = '';
  serverResponse: any;
  constructor(private semestreService: SemestreService, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
   
    this.semestreSeleccionado = this.year + "-" + this.semester;

  }
  crearSemestre() {
    console.log(this.semestreSeleccionado);

    this.semestreData.numeroSemestre = this.semestreSeleccionado;
    console.log(this.semestreData.numeroSemestre);
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
  onYearChange(event: any) {
    this.year = event.target.value;
    this.semestreSeleccionado = this.year + "-" + this.semester;
  }

  onSemesterChange(event: any) {
    this.semester = event.target.value;

    this.semestreSeleccionado = this.year + "-" + this.semester;
  }
}
