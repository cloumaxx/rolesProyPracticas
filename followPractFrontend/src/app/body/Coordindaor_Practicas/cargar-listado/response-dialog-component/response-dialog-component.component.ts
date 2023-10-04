import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-response-dialog-component',
  templateUrl: './response-dialog-component.component.html',
  styleUrls: ['./response-dialog-component.component.css']
})
export class ResponseDialogComponent {
  estudiantesActivados: any[] = []; 
  estudiantesCreados: any[]= [] ;
  estudiantesInactivados: any[]= [] ;
  estudiantesNuevos: any[]= [] ;
  activeSlideIndex = 0; 
  tamañoArrayMasGrande = 0;
  hayContenidoEnDiapositivas: boolean = false;

  @ViewChild('carousel') carousel: CarouselComponent | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public serverResponse: any,
  private dialogRef: MatDialogRef<ResponseDialogComponent>) {}

  ngOnInit(): void {

    this.estudiantesActivados = this.serverResponse.Cambios["Estudiantes activados"];
    this.estudiantesCreados = this.serverResponse.Cambios["Estudiantes creados"];
    this.estudiantesInactivados = this.serverResponse.Cambios["Estudiantes inactivados"]; 
    this.estudiantesNuevos  = this.serverResponse.Cambios["Estudiantes nuevos"];
    this.tamañoArrayMasGrande = this.validarArrayMayor()-1;
    this.hayContenidoEnDiapositivas =
    this.estudiantesActivados.length > 0 ||
    this.estudiantesCreados.length > 0 ||
    this.estudiantesInactivados.length > 0 ||
    this.estudiantesNuevos?.length > 0;
    console.log(this.tamañoArrayMasGrande);
    console.log("next",this.activeSlideIndex);
    
  }
    validarArrayMayor(){
      let contador = 0;
      if(this.estudiantesActivados && this.estudiantesActivados.length > 0){
        contador++;
      }else if(this.estudiantesCreados && this.estudiantesCreados.length > 0){
        contador++;
      }else if(this.estudiantesInactivados && this.estudiantesInactivados.length > 0){
        contador++;
      }else if(this.estudiantesNuevos && this.estudiantesNuevos.length > 0){
        contador++;
      }


      return contador;
    }
    prevSlide() {
      if (this.hayContenidoEnDiapositivas) {
        console.log("prev", this.activeSlideIndex);
        if (this.activeSlideIndex > 0) {
          this.activeSlideIndex--;
        } else if (this.activeSlideIndex === 0) {
          this.activeSlideIndex = this.tamañoArrayMasGrande;
        }
        this.carousel?.selectSlide(this.activeSlideIndex);
      }
    }
    
    nextSlide() {
      if (this.hayContenidoEnDiapositivas) {
        console.log("next", this.activeSlideIndex);
        if (this.activeSlideIndex < this.tamañoArrayMasGrande) {
          this.activeSlideIndex++;
        } else if (this.activeSlideIndex === this.tamañoArrayMasGrande) {
          this.activeSlideIndex = 0;
        }
        this.carousel?.selectSlide(this.activeSlideIndex);
      }
    }
  closeDialog() {
    this.dialogRef.close();
  }
}
