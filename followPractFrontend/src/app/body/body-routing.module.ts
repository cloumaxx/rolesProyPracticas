import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
import { CargarListadoAspirantesComponent } from './cargar-listado-aspirantes/cargar-listado-aspirantes.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
