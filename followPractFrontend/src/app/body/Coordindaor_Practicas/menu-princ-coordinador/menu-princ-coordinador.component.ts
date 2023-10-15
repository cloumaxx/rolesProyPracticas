import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteServicesService } from 'src/app/services/DocenteServices/docente-services.service';

@Component({
  selector: 'app-menu-princ-coordinador',
  templateUrl: './menu-princ-coordinador.component.html',
  styleUrls: ['./menu-princ-coordinador.component.css']
})
export class MenuPrincCoordinadorComponent {
  constructor(private router:Router, private docenteService:DocenteServicesService){
    
  }

  routLinkVisualizarMenuInicial(){
    this.router.navigate(['']);
  }
  routLinkAsignarEstudiantesDocentes(){
    //this.router.navigate(['']);
    //this.router.navigate(['body/coordinadorPracticas/asignar_estudiantes_docentes']);
    this.docenteService.asignarRandomEstudiantes().subscribe(
      (response) => {
        // Handle success (e.g., display a success message)
        console.log('Random students assigned:');
        console.log(response);
      },
      error => {
        // Handle error (e.g., display an error message)
        console.error('Random assignment failed:', error);
      }
    );
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
    this.router.navigate(['body/coordinadorPracticas/crear_docente']);
  }
}
