import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VisualizarListadoDocentesComponent } from '../../body/visualizar-listado-docentes/visualizar-listado-docentes.component';

@NgModule({
  declarations: [VisualizarListadoDocentesComponent],
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [VisualizarListadoDocentesComponent],
})
export class VisualizarListadoDocentesModule {}