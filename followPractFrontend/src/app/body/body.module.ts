import { BodyRoutingModule } from './body-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CargarListadoAspirantesComponent } from './Coordindaor_Practicas/cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { ResponseDialogComponentAspirantesComponent } from './Coordindaor_Practicas/cargar-listado-aspirantes/response-dialog-component-aspirantes/response-dialog-component-aspirantes.component';
import { CargarListadoComponent } from './Coordindaor_Practicas/cargar-listado/cargar-listado.component';
import { ResponseDialogComponent } from './Coordindaor_Practicas/cargar-listado/response-dialog-component/response-dialog-component.component';
import { FormularioNuevoDocenteMonitorComponent } from './Coordindaor_Practicas/forms/formulario-nuevo-docente-monitor/formulario-nuevo-docente-monitor.component';
import { FormularioNuevoSemestreComponent } from './Coordindaor_Practicas/forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { MenuPrincCoordinadorComponent } from './Coordindaor_Practicas/menu-princ-coordinador/menu-princ-coordinador.component';
import { NavBarComponent } from './Coordindaor_Practicas/nav-bar/nav-bar.component';
import { VisualizarAspirantesComponent } from './Coordindaor_Practicas/visualizar-aspirantes/visualizar-aspirantes.component';
import { VisualizarBaseDeDatosCompletaComponent } from './Coordindaor_Practicas/visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { VisualizarEstudiantesComponent } from './Coordindaor_Practicas/visualizar-estudiantes/visualizar-estudiantes.component';
import { VisualizarListadoDocentesComponent } from './Coordindaor_Practicas/visualizar-listado-docentes/visualizar-listado-docentes.component';
import { VisualizarSemestresComponent } from './Coordindaor_Practicas/visualizar-semestres/visualizar-semestres.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';



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
    VisualizarSemestresComponent,
    VisualizarListadoDocentesComponent,
    VisualizarEstudiantesComponent,
    VisualizarAspirantesComponent,
  ],
  imports: [
    BodyRoutingModule,
    MatDialogModule,
    CommonModule,
    CarouselModule.forRoot(),
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule, MatTableModule, MatInputModule
    
  ]
})
export class BodyModule { }
