import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
import { CargarListadoAspirantesComponent } from './cargar-listado-aspirantes/cargar-listado-aspirantes.component';
import { VisualizarBaseDeDatosCompletaComponent } from './visualizar-base-de-datos-completa/visualizar-base-de-datos-completa.component';
const routes: Routes = [
  {
    path:'',
    component:CargarListadoComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
