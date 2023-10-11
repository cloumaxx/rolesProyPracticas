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
import { MenuPrincCoordinadorComponent } from './Coordindaor_Practicas/menu-princ-coordinador/menu-princ-coordinador.component';
import { NavBarComponent } from './Coordindaor_Practicas/nav-bar/nav-bar.component';
import { VisualizarAspirantesComponent } from './Coordindaor_Practicas/visualizar-aspirantes/visualizar-aspirantes.component';
import { VisualizarBaseDeDatosCompletaComponent } from './Coordindaor_Practicas/visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { VisualizarListadoDocentesComponent } from './Coordindaor_Practicas/visualizar-listado-docentes/visualizar-listado-docentes.component';
import { VisualizarSemestresComponent } from './Coordindaor_Practicas/visualizar-semestres/visualizar-semestres.component';
import { LoginComponent } from './login/login.component';
import { MenuPrincDirectorComponent } from './DirectorCity/menu-princ-director/menu-princ-director.component';
import { MenuPrincDocenteMonitorComponent } from './Docente_monitor/menu-princ-docente-monitor/menu-princ-docente-monitor.component';
import { MenuPrincEstudianteComponent } from './Estudiante/menu-princ-estudiante/menu-princ-estudiante.component';
import { MenuPrincOficinaPracticasComponent } from './LiderOficinaPracticas/menu-princ-oficina-practicas/menu-princ-oficina-practicas.component';
import { NavBarOfcPracticasComponent } from './LiderOficinaPracticas/nav-bar-ofc-practicas/nav-bar-ofc-practicas.component';
import { FormularioNuevoSemestreComponent } from './LiderOficinaPracticas/forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { VisualizarEstudiantesComponent } from './Coordindaor_Practicas/visualizar-estudiantes/visualizar-estudiantes.component';
import { VerSemestresOficinaPracticasComponent } from './LiderOficinaPracticas/visualizar/ver-semestres-oficina-practicas/ver-semestres-oficina-practicas.component';
import { FormularioNuevoProgramaComponent } from './LiderOficinaPracticas/forms/formulario-nuevo-programa/formulario-nuevo-programa.component';
import { FormularioNuevoCoordinadorComponent } from './LiderOficinaPracticas/forms/formulario-nuevo-coordinador/formulario-nuevo-coordinador.component';
import { VerCoordinadoresOficinaPracticasComponent } from './LiderOficinaPracticas/visualizar/ver-coordinadores-oficina-practicas/ver-coordinadores-oficina-practicas.component';
import { VerProgramasOficinaPracticasComponent } from './LiderOficinaPracticas/visualizar/ver-programas-oficina-practicas/ver-programas-oficina-practicas.component';


@NgModule({
  declarations: [
    CargarListadoComponent,
    NavBarComponent,
    CargarListadoAspirantesComponent,
    VisualizarBaseDeDatosCompletaComponent,
    MenuPrincCoordinadorComponent,
    FormularioNuevoDocenteMonitorComponent,
    ResponseDialogComponent,
    ResponseDialogComponentAspirantesComponent,
    VisualizarSemestresComponent,
    VisualizarListadoDocentesComponent,
    VisualizarEstudiantesComponent,
    VisualizarAspirantesComponent,
    LoginComponent,
    MenuPrincDirectorComponent,
    MenuPrincDocenteMonitorComponent,
    MenuPrincEstudianteComponent,
    MenuPrincOficinaPracticasComponent,
    NavBarOfcPracticasComponent,
    FormularioNuevoSemestreComponent,
    VerSemestresOficinaPracticasComponent,
    FormularioNuevoProgramaComponent,
    FormularioNuevoCoordinadorComponent,
    VerCoordinadoresOficinaPracticasComponent,
    VerProgramasOficinaPracticasComponent
  ],
  imports: [
    BodyRoutingModule,
    MatDialogModule,
    CommonModule,
    CarouselModule.forRoot(),
    FormsModule,
    MatSnackBarModule,
    

    
  ]
})
export class BodyModule { }
