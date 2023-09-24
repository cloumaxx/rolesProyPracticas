import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    CargarListadoComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    
  ]
})
export class BodyModule { }
