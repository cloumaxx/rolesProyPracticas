import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
import { CargarListadoAspirantesComponent } from './cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { VisualizarBaseDeDatosCompletaComponent } from './visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { MenuPrincCoordinadorComponent } from './menu-princ-coordinador/menu-princ-coordinador.component';
import { FormularioNuevoSemestreComponent } from './forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { VisualizarListadoDocentesComponent } from './visualizar-listado-docentes/visualizar-listado-docentes.component';
import { VisualizarSemestresComponent } from './visualizar-semestres/visualizar-semestres.component';
import { VisualizarEstudiantesComponent } from './visualizar-estudiantes/visualizar-estudiantes.component';

const routes: Routes = [
  {
    path:'',
    component:MenuPrincCoordinadorComponent
  },
  {
    path:'body/cargarListado',
    component:CargarListadoComponent
  },
  {
    path:'body/cargar_listado_aspirantes',
    component:CargarListadoAspirantesComponent
  },
  {
    path:'body/visualizar_listado_completo',
    component:VisualizarBaseDeDatosCompletaComponent
  },
  {
    path: 'body/menu_principal_coordinador',
    component: MenuPrincCoordinadorComponent
  },
  {
    path: 'body/formulario_nuevo_semestre',
    component: FormularioNuevoSemestreComponent
  },
  {
    path: 'body/visualizar_semestres',
    component: VisualizarSemestresComponent
  },
  {
    path: 'body/visualizar_listado_docentes',
    component: VisualizarListadoDocentesComponent
  },
  {
    path: 'body/visualizar_listado_estudiantes',
    component: VisualizarEstudiantesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
