import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){
  }
  routLinkIrMenuCoordinador(){
    this.router.navigate(['body/coordinadorPracticas/MenuPrincCoordinador']);

  }
  routLinkIrMenuOficinaPracticas(){
    this.router.navigate(['body/oficinaPracticas/MenuPrincOficinaPracticas']);

  }
}
    
