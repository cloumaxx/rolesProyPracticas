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
    this.router.navigate(['body/coordinadorPracticas/cargar_listado_aspirantes']);
  }
  routLinkCargarEstudiantes(){
    this.router.navigate(['body/coordinadorPracticas/cargarListado']);
  }
  routLinkVisualizarListadoAspirantes(){
    this.router.navigate(['body/coordinadorPracticas/visualizar_listado_completo']);
  }
  routLinkVisualizarMenuCoordinador(){
    this.router.navigate(['body/coordinadorPracticas/menu_principal_coordinador']);
  }
  //MenuPrincCoordinadorComponent
  
  routLinkVisualizarCrearSemestre(){
    this.router.navigate(['body/coordinadorPracticas/menu_principal_coordinador']);
  }

  routLinkVisualizarListadoDocentes(){
    this.router.navigate(['body/coordinadorPracticas/visualizar_listado_docentes']);
  }
  
  routLinkVisualizarListadoSemestres(){
    this.router.navigate(['body/coordinadorPracticas/visualizar_semestres']);
  }
  
  routLinkVisualizarListadoEstudiantes(){
    this.router.navigate(['body/coordinadorPracticas/visualizar_listado_estudiantes']);
  }
}

