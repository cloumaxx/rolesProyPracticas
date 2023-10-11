import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BodyModule } from './body/body.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsignarDocEstComponent } from './src/app/body/Coordindaor_Practicas/asignar-doc-est/asignar-doc-est.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignarDocEstComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
