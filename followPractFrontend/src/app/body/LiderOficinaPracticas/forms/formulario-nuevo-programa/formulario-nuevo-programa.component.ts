import { Component } from '@angular/core';
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
    idCoordinador:''
    
  };
  constructor(private programaService: ProgramaServicesService) { }
  crearPrograma() {
    console.log(this.programaData);
    this.programaService.crearPrograma(this.programaData)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error('Error al crear el programa', error);
        }
      );
  }
}
