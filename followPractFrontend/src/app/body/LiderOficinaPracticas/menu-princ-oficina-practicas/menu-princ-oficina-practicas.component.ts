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
}
