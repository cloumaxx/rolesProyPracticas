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
  
  routLinkVisualizarVerSemestre(){
    this.router.navigate(['body/coordinadorPracticas/visualizar_semestres']);
  }
}
