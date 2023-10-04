import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoComponent } from './body/Coordindaor_Practicas/cargar-listado/cargar-listado.component';

const routes: Routes = [
  
  { 
    path: 'body/cargar-listado',
    component: CargarListadoComponent
  },
  {
    path: '',
    loadChildren: () => import('./body/body.module').then(m => m.BodyModule)
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
