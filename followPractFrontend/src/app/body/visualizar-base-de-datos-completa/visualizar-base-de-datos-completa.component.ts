import { Component } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { AspiranteServicesService } from 'src/app/services/AspiranteServices/aspirante-services.service';

@Component({
  selector: 'app-visualizar-base-de-datos-completa',
  templateUrl: './visualizar-base-de-datos-completa.component.html',
  styleUrls: ['./visualizar-base-de-datos-completa.component.css']
})
export class VisualizarBaseDeDatosCompletaComponent {
  semestreSeleccionado: string = "";
  year: number = 2023;
  semester: string = '01';
  notificationMessage: string = '';
  constructor(
    private aspirantesService: AspiranteServicesService,
    private notificationService: NotificationService
  )
   {
    this.semestreSeleccionado = this.year + "-" + this.semester;

    console.log("1-->" + this.semestreSeleccionado);
  }
  ngOnInit(): void {
    // Subscribe to notifications
    this.notificationService.notifications.subscribe((message) => {
      this.notificationMessage = message;
      if (message) {
        setTimeout(() => this.clearNotification(), 5000); // Hide after 5 seconds
      }
    });

    this.aspirantesService.visualizarListado(this.semestreSeleccionado).subscribe((message) => {
      console.log(message)
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
  
  clearNotification() {
    this.notificationMessage = '';
  }
}
