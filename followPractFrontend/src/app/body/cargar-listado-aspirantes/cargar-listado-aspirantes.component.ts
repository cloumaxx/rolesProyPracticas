import { Component } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { AspiranteServicesService } from 'src/app/services/AspiranteServices/aspirante-services.service';

@Component({
  selector: 'app-cargar-listado-aspirantes',
  templateUrl: './cargar-listado-aspirantes.component.html',
  styleUrls: ['./cargar-listado-aspirantes.component.css']
})
export class CargarListadoAspirantesComponent {
  selectedFile: File | undefined;
  semestreSeleccionado: string = "";
  year: number = 2022;
  semester: string = '01';
  notificationMessage: string = '';
  constructor(
    private aspiranteService: AspiranteServicesService,
    private notificationService: NotificationService
  )
   {
    this.semestreSeleccionado = this.year + "-" + this.semester;

  }
  ngOnInit(): void {
    // Subscribe to notifications
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
    if (this.semestreSeleccionado != "") {
      if (this.selectedFile) {
        this.aspiranteService.cargarArchivoExcel(this.selectedFile, this.semestreSeleccionado).subscribe(
          (response) => {
            this.notificationService.showNotification('Archivo cargado con éxito');
            console.log('Archivo cargado con éxito', response);
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
}
