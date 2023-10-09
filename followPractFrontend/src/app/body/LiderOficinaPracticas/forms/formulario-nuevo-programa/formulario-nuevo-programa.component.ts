import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-nuevo-programa',
  templateUrl: './formulario-nuevo-programa.component.html',
  styleUrls: ['./formulario-nuevo-programa.component.css']
})
export class FormularioNuevoProgramaComponent {
  programaData = {
    programaNombre:'',
    programaCodigo: ''
    
  };
  crearPrograma() {
  }
}
