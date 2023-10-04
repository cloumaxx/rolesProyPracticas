import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoAspirantesComponent } from './Coordindaor_Practicas/cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { CargarListadoComponent } from './Coordindaor_Practicas/cargar-listado/cargar-listado.component';
import { FormularioNuevoSemestreComponent } from './Coordindaor_Practicas/forms/formulario-nuevo-semestre/formulario-nuevo-semestre.component';
import { MenuPrincCoordinadorComponent } from './Coordindaor_Practicas/menu-princ-coordinador/menu-princ-coordinador.component';
import { VisualizarBaseDeDatosCompletaComponent } from './Coordindaor_Practicas/visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
import { VisualizarEstudiantesComponent } from './Coordindaor_Practicas/visualizar-estudiantes/visualizar-estudiantes.component';
import { VisualizarListadoDocentesComponent } from './Coordindaor_Practicas/visualizar-listado-docentes/visualizar-listado-docentes.component';
import { VisualizarSemestresComponent } from './Coordindaor_Practicas/visualizar-semestres/visualizar-semestres.component';
import { LoginComponent } from './login/login.component';
import { MenuPrincOficinaPracticasComponent } from './LiderOficinaPracticas/menu-princ-oficina-practicas/menu-princ-oficina-practicas.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'body/MenuPrincCoordinador',
    component:MenuPrincCoordinadorComponent
  },
  {
    path:'body/MenuPrincOficinaPracticas',
    component:MenuPrincOficinaPracticasComponent
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
