import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-princ-coordinador',
  templateUrl: './menu-princ-coordinador.component.html',
  styleUrls: ['./menu-princ-coordinador.component.css']
})
export class MenuPrincCoordinadorComponent {
  constructor(private router:Router){
    
  }

  routLinkVisualizarMenuInicial(){
    this.router.navigate(['']);
  }
  routLinkVisualizarCrearSemestre(){
    this.router.navigate(['body/formulario_nuevo_semestre']);
  }
  routLinkVisualizarVerSemestre(){
    this.router.navigate(['body/visualizar_semestres']);
  }

  routLinkVisualizarCrearDocente(){
    this.router.navigate(['body/formulario_nuevo_docente']);
  }

  routLinkVisualizarCrearMonitor(){
    this.router.navigate(['body/formulario_nuevo_monitor']);
  }
}