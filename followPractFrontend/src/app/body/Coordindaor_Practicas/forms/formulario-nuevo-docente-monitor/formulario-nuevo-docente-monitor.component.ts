import { Component } from '@angular/core';
import { DocenteServicesService } from 'src/app/services/DocenteServices/docente-services.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-nuevo-docente-monitor',
  templateUrl: './formulario-nuevo-docente-monitor.component.html',
  styleUrls: ['./formulario-nuevo-docente-monitor.component.css']
})
export class FormularioNuevoDocenteMonitorComponent {
    docente = {
      nombre: '',
      apellido: '',
      cedula: '',
      correoPersonal: '',
      correoInstitucional: '',
      contrasena: '',
      fechaNacimiento: '',
      estado: true,
      horasDisponibles: 0
    };
  
    constructor(private docenteService: DocenteServicesService, private snackBar: MatSnackBar, private router: Router) {}
  
    registrarDocente() {
      this.docenteService.registrarDocente(this.docente).subscribe(
        (response) => {
          console.log('Docente registrado exitosamente:', response);
          this.mostrarMensaje('Docente registrado correctamente', 'success');
          this.router.navigate(['body/coordinadorPracticas/visualizar_listado_docentes']);
        },
        (error) => {
          console.error('Error al registrar docente:', error);
          this.mostrarMensaje('Error al registrar docente', 'error');
        }
      );
    }
  
    mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
      const config = new MatSnackBarConfig();
      config.duration = 5000;
  
      if (tipo === 'success') {
        config.panelClass = ['success-snackbar'];
      } else {
        config.panelClass = ['error-snackbar'];
      }
  
      this.snackBar.open(mensaje, '', config);
    }

    volverAtras() {
      this.router.navigate(['/body/coordinadorPracticas/menu_principal_coordinador']);
    }
}