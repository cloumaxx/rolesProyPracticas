import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoSemestreComponent } from './formulario-nuevo-semestre.component';

describe('FormularioNuevoSemestreComponent', () => {
  let component: FormularioNuevoSemestreComponent;
  let fixture: ComponentFixture<FormularioNuevoSemestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioNuevoSemestreComponent]
    });
    fixture = TestBed.createComponent(FormularioNuevoSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
