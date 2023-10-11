import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoAspirantesComponent } from './Coordindaor_Practicas/cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { CargarListadoComponent } from './Coordindaor_Practicas/cargar-listado/cargar-listado.component';
import { MenuPrincCoordinadorComponent } from './Coordindaor_Practicas/menu-princ-coordinador/menu-princ-coordinador.component';
import { VisualizarBaseDeDatosCompletaComponent } from './Coordindaor_Practicas/visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { VisualizarListadoDocentesComponent } from './Coordindaor_Practicas/visualizar-listado-docentes/visualizar-listado-docentes.component';
import { VisualizarSemestresComponent } from './Coordindaor_Practicas/visualizar-semestres/visualizar-semestres.component';
import { LoginComponent } from './login/login.component';
import { MenuPrincOficinaPracticasComponent } from './LiderOficinaPracticas/menu-princ-oficina-practicas/menu-princ-oficina-practicas.component';
import { FormularioNuevoSemestreComponent } from './LiderOficinaPracticas/forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { VisualizarEstudiantesComponent } from './Coordindaor_Practicas/visualizar-estudiantes/visualizar-estudiantes.component';
import { VerSemestresOficinaPracticasComponent } from './LiderOficinaPracticas/visualizar/ver-semestres-oficina-practicas/ver-semestres-oficina-practicas.component';
import { FormularioNuevoProgramaComponent } from './LiderOficinaPracticas/forms/formulario-nuevo-programa/formulario-nuevo-programa.component';
import { FormularioNuevoCoordinadorComponent } from './LiderOficinaPracticas/forms/formulario-nuevo-coordinador/formulario-nuevo-coordinador.component';
import { VerCoordinadoresOficinaPracticasComponent } from './LiderOficinaPracticas/visualizar/ver-coordinadores-oficina-practicas/ver-coordinadores-oficina-practicas.component';

import { FormularioNuevoDocenteMonitorComponent } from './Coordindaor_Practicas/forms/formulario-nuevo-docente-monitor/formulario-nuevo-docente-monitor.component';
import { FormularioEditarDocenteMonitorComponent } from './Coordindaor_Practicas/forms/formulario-editar-docente-monitor/formulario-editar-docente-monitor.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  /*
    urls para el coordinador de practicas
  */
  {
    path:'body/coordinadorPracticas/MenuPrincCoordinador',
    component:MenuPrincCoordinadorComponent
  },
  {
    path:'body/coordinadorPracticas/cargarListado',
    component:CargarListadoComponent
  },
  {
    path:'body/coordinadorPracticas/cargar_listado_aspirantes',
    component:CargarListadoAspirantesComponent
  },
  {
    path:'body/coordinadorPracticas/visualizar_listado_completo',
    component:VisualizarBaseDeDatosCompletaComponent
  },
  {
    path: 'body/coordinadorPracticas/menu_principal_coordinador',
    component: MenuPrincCoordinadorComponent
  },
 
  {
    path: 'body/coordinadorPracticas/visualizar_semestres',
    component: VisualizarSemestresComponent
  },
  {
    path: 'body/coordinadorPracticas/visualizar_listado_docentes',
    component: VisualizarListadoDocentesComponent
  },
  {
    path: 'body/coordinadorPracticas/visualizar_listado_estudiantes',
    component: VisualizarEstudiantesComponent
  },
  /*
    urls para el lider de oficina de practicas
  */
  {
    path:'body/oficinaPracticas/MenuPrincOficinaPracticas',
    component:MenuPrincOficinaPracticasComponent
  },
  {
    path: 'body/oficinaPracticas/crear_semestre',
    component: FormularioNuevoSemestreComponent
  },
  {
    path: 'body/oficinaPracticas/ver_semestres',
    component: VerSemestresOficinaPracticasComponent
  },
  {
    path: 'body/oficinaPracticas/crear_programa',
    component:FormularioNuevoProgramaComponent
  },
  {
    path: 'body/oficinaPracticas/crear_coordinador',
    component:FormularioNuevoCoordinadorComponent
  },
  {
    path:'body/oficinaPracticas/visualizar_listado_coordinadores',
    component:VerCoordinadoresOficinaPracticasComponent
  },
  {
    path: 'body/visualizar_listado_docentes',
    component: VisualizarListadoDocentesComponent
  },
  {
    path: 'body/visualizar_listado_estudiantes',
    component: VisualizarEstudiantesComponent
  },
  {
    path: 'body/coordinadorPracticas/crear_docente',
    component: FormularioNuevoDocenteMonitorComponent
  },
  {
    path: 'body/coordinadorPracticas/editar-docente/:id', 
    component: FormularioEditarDocenteMonitorComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
