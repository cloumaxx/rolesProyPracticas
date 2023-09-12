import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/EstudianteServices/estudiante-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargar-listado',
  templateUrl: './cargar-listado.component.html',
  styleUrls: ['./cargar-listado.component.css']
})
export class CargarListadoComponent implements OnInit {
  columnas: string[] = []; // Declaración de la propiedad columnas

  constructor(
    private estudianteService: EstudianteService,
  
  ) { }

  ngOnInit(): void {

   
   }




}
