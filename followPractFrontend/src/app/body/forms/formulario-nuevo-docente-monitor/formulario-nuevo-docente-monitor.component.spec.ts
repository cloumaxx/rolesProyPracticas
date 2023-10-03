import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoDocenteMonitorComponent } from './formulario-nuevo-docente-monitor.component';

describe('FormularioNuevoDocenteMonitorComponent', () => {
  let component: FormularioNuevoDocenteMonitorComponent;
  let fixture: ComponentFixture<FormularioNuevoDocenteMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioNuevoDocenteMonitorComponent]
    });
    fixture = TestBed.createComponent(FormularioNuevoDocenteMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
