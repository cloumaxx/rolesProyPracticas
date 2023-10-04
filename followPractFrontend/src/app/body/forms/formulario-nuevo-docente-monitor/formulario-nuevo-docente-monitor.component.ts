import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocenteService } from 'src/app/services/DocenteServices/docente-services.service';

@Component({
  selector: 'app-formulario-nuevo-docente-monitor',
  templateUrl: './formulario-nuevo-docente-monitor.component.html',
  styleUrls: ['./formulario-nuevo-docente-monitor.component.css']
})
export class FormularioNuevoDocenteMonitorComponent {
  docente = {
    nombre : '',
    apellido : '',
    cedula : '',
    correoPersonal : '',
    correoInstitucional : '',
    contrasena : '',
    fechaNacimiento : '',
    estado : true,
    horasDispobibles : 0
  };
  constructor(private docenteService: DocenteService) {};
  

  registrarDocente() {
      this.docenteService.registrarDocente(this.docente).subscribe(
        (response) => {
          console.log('Docente registrado exitosamente:', response);
          // Puedes redirigir a otra página, mostrar un mensaje de éxito, etc.
        },
        (error) => {
          console.error('Error al registrar docente:', error);
          // Manejar el error, mostrar un mensaje de error, etc.
        }
      );
      }
}
