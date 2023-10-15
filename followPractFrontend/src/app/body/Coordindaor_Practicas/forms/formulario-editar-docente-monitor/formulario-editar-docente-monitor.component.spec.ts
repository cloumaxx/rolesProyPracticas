import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarDocenteMonitorComponent } from './formulario-editar-docente-monitor.component';

describe('FormularioEditarDocenteMonitorComponent', () => {
  let component: FormularioEditarDocenteMonitorComponent;
  let fixture: ComponentFixture<FormularioEditarDocenteMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEditarDocenteMonitorComponent]
    });
    fixture = TestBed.createComponent(FormularioEditarDocenteMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
