import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-ofc-practicas',
  templateUrl: './nav-bar-ofc-practicas.component.html',
  styleUrls: ['./nav-bar-ofc-practicas.component.css']
})
export class NavBarOfcPracticasComponent {
  constructor(private router:Router){
  }
  routLinkIrMenuOficinaPracticas(){
    this.router.navigate(['body/oficinaPracticas/MenuPrincOficinaPracticas']);

  }
  VerSemestresOficinaPracticasComponent(){
    this.router.navigate(['body/oficinaPracticas/ver_semestres']);
  }
  routerLinkVisualozarListadoCoordinadores(){
    this.router.navigate(['body/oficinaPracticas/visualizar_listado_coordinadores']);
  }
  routerLinkVisualozarListadoProgramas(){
    this.router.navigate(['body/oficinaPracticas/visualizar_listado_programas']);
  }
}
