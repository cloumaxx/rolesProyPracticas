import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoCoordinadorComponent } from './formulario-nuevo-coordinador.component';

describe('FormularioNuevoCoordinadorComponent', () => {
  let component: FormularioNuevoCoordinadorComponent;
  let fixture: ComponentFixture<FormularioNuevoCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioNuevoCoordinadorComponent]
    });
    fixture = TestBed.createComponent(FormularioNuevoCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
