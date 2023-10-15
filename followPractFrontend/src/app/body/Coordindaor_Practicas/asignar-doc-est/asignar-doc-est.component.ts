import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/DocenteServices/docente-services.service';

@Component({
  selector: 'app-asignar-doc-est',
  templateUrl: './asignar-doc-est.component.html',
  styleUrls: ['./asignar-doc-est.component.css']
})
export class AsignarDocEstComponent implements OnInit {

  constructor(private docenteService: DocenteService) {}

  asignarRandomEstudiantes() {
    
      this.docenteService.asignarRandomEstudiantes().subscribe(
        () => {
          // Handle success (e.g., display a success message)
          console.log('Random students assigned:');
        },
        error => {
          // Handle error (e.g., display an error message)
          console.error('Random assignment failed:', error);
        }
      );
    }
  
    ngOnInit(): void {
        
    }
}
