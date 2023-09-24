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
}
