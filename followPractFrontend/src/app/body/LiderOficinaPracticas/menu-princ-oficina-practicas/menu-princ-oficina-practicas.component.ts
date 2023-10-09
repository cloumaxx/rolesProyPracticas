import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-princ-oficina-practicas',
  templateUrl: './menu-princ-oficina-practicas.component.html',
  styleUrls: ['./menu-princ-oficina-practicas.component.css']
})
export class MenuPrincOficinaPracticasComponent {
  constructor(private router:Router){
    
  }
  routLinkVisualizarVerSemestre(){
    this.router.navigate(['body/oficinaPracticas/crear_semestre']);
  }
  routLinkVisualizarMenuInicial(){
    this.router.navigate(['']);
  }
  VerSemestresOficinaPracticasComponent(){
    this.router.navigate(['body/oficinaPracticas/ver_semestres']);
  }
  routerLinkCrearPrograma(){
    this.router.navigate(['body/oficinaPracticas/crear_programa']);
  }
  routerLinkCrearCoordinador(){
    this.router.navigate(['body/oficinaPracticas/crear_coordinador']);
  }
}
