import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteServicesService } from 'src/app/services/DocenteServices/docente-services.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar-docente-monitor',
  templateUrl: './formulario-editar-docente-monitor.component.html',
  styleUrls: ['./formulario-editar-docente-monitor.component.css']
})
export class FormularioEditarDocenteMonitorComponent implements OnInit {
  docenteId: number = 0;
  docente: any = {
    // Propiedades del docente que se editarán
    nombre: '',
    apellido: '',
    cedula: '',
    correoPersonal: '',
    correoInstitucional: '',
    contrasena: '',
    fechaNacimiento: '',
    estado: true,
    horasDispobibles: 0
  };

  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteServicesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el ID del docente de los parámetros de la URL
    this.route.params.subscribe(params => {
      this.docenteId = +params['id']; // '+' para convertir el parámetro a número
      // Llamar al servicio para obtener los detalles del docente
      this.obtenerDetallesDocente();
    });
  }

  obtenerDetallesDocente() {
    this.docenteService.obtenerDocentePorId(this.docenteId).subscribe(
      (data) => {
        this.docente = data;
      },
      (error) => {
        console.error('Error al obtener detalles del docente:', error);
        this.mostrarMensaje('Error al obtener detalles del docente', 'error');
      }
    );
  }

  actualizarDocente() {
    this.docenteService.actualizarDocente(this.docenteId, this.docente).subscribe(
      (response) => {
        console.log('Docente actualizado exitosamente:', response);
        this.mostrarMensaje('Docente actualizado correctamente', 'success');
      },
      (error) => {
        console.error('Error al actualizar docente:', error);
        this.mostrarMensaje('Error al actualizar docente', 'error');
      }
    );
  }

  volverAtras() {
    this.router.navigate(['/body/coordinadorPracticas/visualizar_listado_docentes']);
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
}
