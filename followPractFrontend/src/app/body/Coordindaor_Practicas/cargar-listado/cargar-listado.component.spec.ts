import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarListadoComponent } from './cargar-listado.component';

describe('CargarListadoComponent', () => {
  let component: CargarListadoComponent;
  let fixture: ComponentFixture<CargarListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarListadoComponent]
    });
    fixture = TestBed.createComponent(CargarListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
