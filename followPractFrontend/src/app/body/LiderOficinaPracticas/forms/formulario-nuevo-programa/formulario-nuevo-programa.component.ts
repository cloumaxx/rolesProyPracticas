import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CoordinadorServicesService } from 'src/app/services/CoordinadorServices/coordinador-services.service';
import { ProgramaServicesService } from 'src/app/services/ProgramaServices/programa-services.service';

@Component({
  selector: 'app-formulario-nuevo-programa',
  templateUrl: './formulario-nuevo-programa.component.html',
  styleUrls: ['./formulario-nuevo-programa.component.css']
})
export class FormularioNuevoProgramaComponent {
  programaData = {
    programaNombre:'',
    programaCodigo: '',
    idCoordinador:-1
    
  };
  @ViewChild('miFormulario', { static: false }) formulario: NgForm | undefined;

  filtro: string = ''; 
  nombreCoordinador: string = '';
  coordinadores: any[] = [];
  constructor(private programaService: ProgramaServicesService,
    private coordinadoresServices: CoordinadorServicesService,
    private snackBar: MatSnackBar) {
    this.consultarCoordinadores();
   }
  crearPrograma() {
    
    this.programaData.idCoordinador = this.programaData.idCoordinador;
    console.log(this.programaData);
    if(this.programaData.programaNombre != '' && this.programaData.programaCodigo != '' ){
      this.programaService.crearPrograma(this.programaData)
      .subscribe(
        response => {
          console.log(response);
          this.mostrarMensaje('Programa creado exitosamente', 'success');
          this.programaData.idCoordinador = -1;
          this.formulario?.resetForm(); // Esto restablecerá los valores de los campos del formulario.

        },
        error => {
          console.error('Error al crear el programa', error);
          this.mostrarMensaje('Error al crear el programa', 'error');

        }
      );
    }else{
    
        this.mostrarMensaje('Hay datos vacios', 'error');


    }
    
  }
  consultarCoordinadores(){
      this.coordinadoresServices.verCoordinadores().subscribe(
        (data) => {
          console.log(data);
          this.coordinadores = data;
        },
        (error) => {
          console.error('Error al obtener los coordinadores', error);
        }
      );
    
    
  }
  seleccionarCoordinador(idCoordinador: string, nombCoordinador: string, apellidoCoordinador: string){
    this.nombreCoordinador = nombCoordinador + ' ' + apellidoCoordinador;
    this.programaData.idCoordinador = Number(idCoordinador);
    console.log(idCoordinador);
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
  matchesFilter(coordinador: any): boolean {
    const searchTextLowerCase = this.filtro.toLowerCase();
    // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
    return (
      coordinador.nombre.toLowerCase().includes(searchTextLowerCase) ||
      coordinador.apellido.toLowerCase().includes(searchTextLowerCase) 
    );
  }
  
}
