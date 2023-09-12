import {
  Component,
  OnInit
} from '@angular/core';
import {
  EstudianteService
} from 'src/app/services/EstudianteServices/estudiante-services.service';

@Component({
  selector: 'app-cargar-listado',
  templateUrl: './cargar-listado.component.html',
  styleUrls: ['./cargar-listado.component.css']
})
export class CargarListadoComponent implements OnInit {
  selectedFile: File | undefined;
  semestreSeleccionado: string = "";
  year: number = 2022;
  semester: string = '01';

  constructor(
    private estudianteService: EstudianteService,

  ) {
    console.log("-->" + this.semestreSeleccionado);
  }
  ngOnInit(): void {


  }
  onYearChange(event: any) {
    this.year = event.target.value;
    this.semestreSeleccionado = this.year + "-" + this.semester;
  }

  onSemesterChange(event: any) {
    this.semester = event.target.value;

    this.semestreSeleccionado = this.year + "-" + this.semester;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]; // Obtén el archivo seleccionado
  }


  uploadFile(): void {
    if (this.semestreSeleccionado != "") {
      if (this.selectedFile) {
        this.estudianteService.cargarArchivoExcel(this.selectedFile, this.semestreSeleccionado).subscribe(
          (response) => {
            console.log('Archivo cargado con éxito', response);
          },
          (error) => {
            console.error('Error al cargar el archivo', error);
          }
        );
      } else {
        console.error('Ningún archivo seleccionado');
      }
    }else{
      console.error('Ningún semestre seleccionado');
    }
  }


}
