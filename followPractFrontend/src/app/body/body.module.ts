import { NgModule } from '@angular/core';
import { BodyRoutingModule } from './body-routing.module';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CargarListadoAspirantesComponent } from './cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { VisualizarBaseDeDatosCompletaComponent } from './visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { MenuPrincCoordinadorComponent } from './menu-princ-coordinador/menu-princ-coordinador.component';
import { FormularioNuevoSemestreComponent } from './forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { FormularioNuevoDocenteMonitorComponent } from './forms/formulario-nuevo-docente-monitor/formulario-nuevo-docente-monitor.component';
import { ResponseDialogComponent } from './response-dialog-component/response-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    CargarListadoComponent,
    NavBarComponent,
    CargarListadoAspirantesComponent,
    VisualizarBaseDeDatosCompletaComponent,
    MenuPrincCoordinadorComponent,
    FormularioNuevoSemestreComponent,
    FormularioNuevoDocenteMonitorComponent,
    ResponseDialogComponent
  ],
  imports: [
    BodyRoutingModule,
    MatDialogModule,
    CommonModule,
    CarouselModule.forRoot()
  ]
})
export class BodyModule { }
