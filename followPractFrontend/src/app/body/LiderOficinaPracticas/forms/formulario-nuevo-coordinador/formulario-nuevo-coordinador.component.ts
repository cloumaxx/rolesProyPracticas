import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CoordinadorServicesService } from 'src/app/services/CoordinadorServices/coordinador-services.service';

@Component({
  selector: 'app-formulario-nuevo-coordinador',
  templateUrl: './formulario-nuevo-coordinador.component.html',
  styleUrls: ['./formulario-nuevo-coordinador.component.css']
})
export class FormularioNuevoCoordinadorComponent {
  coordinadorData = {
    nombre: '',
    apellido: '',
    cedula: '',
    correoPersonal: '',
    correoInstitucional: '',
    contrasena:'',
    fechaNacimiento: '',
    estado: true,
    
  };

  constructor(private coordinadorService:CoordinadorServicesService,private snackBar: MatSnackBar) { }

  crearPrograma(){
    console.log(this.coordinadorData);
    this.coordinadorService.crearCoordinador(this.coordinadorData).subscribe(
      response => {
        console.log(response);
        this.mostrarMensaje('Programa creado correctamente', 'success');

      },
      error => {
        console.error('Error al crear el programa', error);
        this.mostrarMensaje('Error al crear el programa', 'error');

      }
    )
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
}
