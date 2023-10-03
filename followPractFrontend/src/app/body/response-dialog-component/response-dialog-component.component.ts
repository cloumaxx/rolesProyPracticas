import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-response-dialog',
  template: `
    <h2>Respuesta del servidor</h2>
    <pre>{{ data | json }}</pre>
    <button mat-button (click)="closeDialog()">Cerrar</button>
  `,
})
export class ResponseDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog() {
    // Cierra el diálogo
  }
}
