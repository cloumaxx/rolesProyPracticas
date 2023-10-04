import { BodyRoutingModule } from './body-routing.module';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CargarListadoAspirantesComponent } from './cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { VisualizarBaseDeDatosCompletaComponent } from './visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { MenuPrincCoordinadorComponent } from './menu-princ-coordinador/menu-princ-coordinador.component';
import { FormularioNuevoSemestreComponent } from './forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { FormularioNuevoDocenteMonitorComponent } from './forms/formulario-nuevo-docente-monitor/formulario-nuevo-docente-monitor.component';
import { ResponseDialogComponent } from './cargar-listado/response-dialog-component/response-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ResponseDialogComponentAspirantesComponent } from './cargar-listado-aspirantes/response-dialog-component-aspirantes/response-dialog-component-aspirantes.component';
import { VisualizarSemestresComponent } from './visualizar-semestres/visualizar-semestres.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    CargarListadoComponent,
    NavBarComponent,
    CargarListadoAspirantesComponent,
    VisualizarBaseDeDatosCompletaComponent,
    MenuPrincCoordinadorComponent,
    FormularioNuevoSemestreComponent,
    FormularioNuevoDocenteMonitorComponent,
    ResponseDialogComponent,
    ResponseDialogComponentAspirantesComponent,
    VisualizarSemestresComponent
  ],
  imports: [
    BodyRoutingModule,
    MatDialogModule,
    CommonModule,
    CarouselModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Tiempo en milisegundos antes de que el mensaje desaparezca automáticamente
      positionClass: 'toast-top-center', // Ubicación del mensaje (en la parte superior del centro)
      preventDuplicates: true, // Evita que se muestren mensajes duplicados
      progressBar: true, // Muestra una barra de progreso
      closeButton: true, // Muestra un botón de cierre
      enableHtml: true, // Permite el uso de HTML en los mensajes
      toastClass: 'ngx-toastr-custom', // Clase CSS personalizada para los mensajes
    })
    
  ]
})
export class BodyModule { }
