import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarListadoAspirantesComponent } from './cargar-listado-aspirantes.component';

describe('CargarListadoAspirantesComponent', () => {
  let component: CargarListadoAspirantesComponent;
  let fixture: ComponentFixture<CargarListadoAspirantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarListadoAspirantesComponent]
    });
    fixture = TestBed.createComponent(CargarListadoAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
