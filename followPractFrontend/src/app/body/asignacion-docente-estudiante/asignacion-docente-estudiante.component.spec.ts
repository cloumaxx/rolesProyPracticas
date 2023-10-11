import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDocenteEstudianteComponent } from './asignacion-docente-estudiante.component';

describe('AsignacionDocenteEstudianteComponent', () => {
  let component: AsignacionDocenteEstudianteComponent;
  let fixture: ComponentFixture<AsignacionDocenteEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionDocenteEstudianteComponent]
    });
    fixture = TestBed.createComponent(AsignacionDocenteEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
