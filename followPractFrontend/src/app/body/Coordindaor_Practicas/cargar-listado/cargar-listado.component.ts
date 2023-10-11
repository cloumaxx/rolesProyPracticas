import {
  Component,
  OnInit
} from '@angular/core';
import {
  EstudianteService
} from 'src/app/services/EstudianteServices/estudiante-services.service';
import { NotificationService } from 'src/app/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResponseDialogComponent } from './response-dialog-component/response-dialog-component.component';
import { SemestreService } from 'src/app/services/SemestreServices/semestre-services.service';


@Component({
  selector: 'app-cargar-listado',
  templateUrl: './cargar-listado.component.html',
  styleUrls: ['./cargar-listado.component.css'],
  template: `
    <button (click)="showNotification()">Show Notification</button>
  `,
})
export class CargarListadoComponent implements OnInit {
  filtro: string = ''; 

  selectedFile: File | undefined;
  semestreSeleccionado: string = "";
  year: number = 2022;
  semester: string = '01';
  notificationMessage: string = '';
  serverResponse: any;
  numeroSemestre: string = '';
  semestres : any[] = [];
  constructor(
    private estudianteService: EstudianteService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private semestreService: SemestreService,
  )
   {
    this.semestreSeleccionado = this.year + "-" + this.semester;

  }
  ngOnInit(): void {
    this.consultarSemestres();
    this.notificationService.notifications.subscribe((message) => {
      this.notificationMessage = message;
      if (message) {
        setTimeout(() => this.clearNotification(), 5000); // Hide after 5 seconds
      }
    });
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
    console.log(this.selectedFile);
  }


  uploadFile(): void {
    if (this.numeroSemestre != "") {
      if (this.selectedFile) {
        this.estudianteService.cargarArchivoExcel(this.selectedFile, this.semestreSeleccionado).subscribe(
          (response) => {
            this.serverResponse = response;
            this.notificationService.showNotification('Archivo cargado con éxito');
            console.log('Archivo cargado con éxito', response);
        
            this.openResponseDialog();
          },
          (error) => {
            this.notificationService.showNotification('Error al cargar el archivo');
            console.error('Error al cargar el archivo', error);
          }
        );
      } else {
        
        this.notificationService.showNotification('Ningún archivo seleccionado');
        console.error('Ningún archivo seleccionado');
      }
    } else {
      
      this.notificationService.showNotification('Ningún semestre seleccionado');
      console.error('Ningún semestre seleccionado');
    }
  }
  

  clearNotification() {
    this.notificationMessage = '';
  }
  openResponseDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.serverResponse; // Pasa la respuesta al diálogo
    this.dialog.open(ResponseDialogComponent, dialogConfig);
  }

  consultarSemestres(){
    this.semestreService.verSemestres().subscribe(
      (data) => {
        console.log(data);
        this.semestres = data;
      },
      (error) => {
        console.error('Error al obtener los semestres', error);
      }
    );
  
  
}

seleccionarSemestre(numSemestre: string){
  this.numeroSemestre = numSemestre;
  console.log(numSemestre);
}
matchesFilter(semestre: any): boolean {
  const searchTextLowerCase = this.filtro.toLowerCase();
  // Puedes agregar más condiciones para filtrar por otros campos si lo necesitas
  return (
    semestre.numeroSemestre.toLowerCase().includes(searchTextLowerCase) 
  );

}
}