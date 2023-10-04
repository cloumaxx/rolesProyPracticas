
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-response-dialog-component-aspirantes',
  templateUrl: './response-dialog-component-aspirantes.component.html',
  styleUrls: ['./response-dialog-component-aspirantes.component.css']
})
export class ResponseDialogComponentAspirantesComponent {
  AspirantesDoc2Activados: any[] = []; 
  AspirantesDoc2Creados: any[]= [] ;
  AspirantesDoc2Inactivados: any[]= [] ;
  AspirantesDoc2Nuevos: any[]= [] ;
  activeSlideIndex = 0; 
  tamañoArrayMasGrande = 0;
  hayContenidoEnDiapositivas: boolean = false;

  @ViewChild('carousel') carousel: CarouselComponent | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public serverResponse: any,
  private dialogRef: MatDialogRef<ResponseDialogComponentAspirantesComponent>) {}

  ngOnInit(): void {

    this.AspirantesDoc2Activados = this.serverResponse.Cambios["AspirantesDoc2 activados"];
    this.AspirantesDoc2Creados = this.serverResponse.Cambios["AspirantesDoc2 creados"];
    this.AspirantesDoc2Inactivados = this.serverResponse.Cambios["AspirantesDoc2 inactivados"]; 
    this.AspirantesDoc2Nuevos  = this.serverResponse.Cambios["AspirantesDoc2 nuevos"];
    this.tamañoArrayMasGrande = this.validarArrayMayor()-1;
    this.hayContenidoEnDiapositivas =
    this.AspirantesDoc2Activados.length > 0 ||
    this.AspirantesDoc2Creados.length > 0 ||
    this.AspirantesDoc2Inactivados.length > 0 ||
    this.AspirantesDoc2Nuevos?.length > 0;
    console.log(this.tamañoArrayMasGrande);
    console.log("next",this.activeSlideIndex);
    
  }
    validarArrayMayor(){
      let contador = 0;
      if(this.AspirantesDoc2Activados && this.AspirantesDoc2Activados.length > 0){
        contador++;
      }else if(this.AspirantesDoc2Creados && this.AspirantesDoc2Creados.length > 0){
        contador++;
      }else if(this.AspirantesDoc2Inactivados && this.AspirantesDoc2Inactivados.length > 0){
        contador++;
      }else if(this.AspirantesDoc2Nuevos && this.AspirantesDoc2Nuevos.length > 0){
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
