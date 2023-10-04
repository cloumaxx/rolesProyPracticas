import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router) { }

  routLinkCargarAspirantes(){
    this.router.navigate(['body/cargar_listado_aspirantes']);
  }
  routLinkCargarEstudiantes(){
    this.router.navigate(['body/cargarListado']);
  }
  routLinkVisualizarListadoAspirantes(){
    this.router.navigate(['body/visualizar_listado_completo']);
  }
  routLinkVisualizarMenuCoordinador(){
    this.router.navigate(['body/menu_principal_coordinador']);
  }
  //MenuPrincCoordinadorComponent
  
  routLinkVisualizarCrearSemestre(){
    this.router.navigate(['body/menu_principal_coordinador']);
  }

  routLinkVisualizarListadoDocentes(){
    this.router.navigate(['body/visualizar_listado_docentes']);
  }
  
  routLinkVisualizarListadoSemestres(){
    this.router.navigate(['body/visualizar_semestres']);
  }
}

