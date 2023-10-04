import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocenteService } from 'src/app/services/DocenteServices/docente-services.service';

@Component({
  selector: 'app-formulario-nuevo-docente-monitor',
  templateUrl: './formulario-nuevo-docente-monitor.component.html',
  styleUrls: ['./formulario-nuevo-docente-monitor.component.css']
})
export class FormularioNuevoDocenteMonitorComponent {
  docenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private docenteService: DocenteService) {
    this.docenteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      correo: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  registrarDocente() {
    if (this.docenteForm.valid) {
      const docenteData = this.docenteForm.value;
      this.docenteService.registrarDocente(docenteData).subscribe(
        (response) => {
          console.log('Docente registrado exitosamente:', response);
          // Puedes redirigir a otra página, mostrar un mensaje de éxito, etc.
        },
        (error) => {
          console.error('Error al registrar docente:', error);
          // Manejar el error, mostrar un mensaje de error, etc.
        }
      );
    } else {
      console.error('Formulario no válido. Por favor, complete todos los campos requeridos.');
      // Puedes mostrar un mensaje al usuario indicando que debe completar todos los campos requeridos.
    }
  }
}
