import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoProgramaComponent } from './formulario-nuevo-programa.component';

describe('FormularioNuevoProgramaComponent', () => {
  let component: FormularioNuevoProgramaComponent;
  let fixture: ComponentFixture<FormularioNuevoProgramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioNuevoProgramaComponent]
    });
    fixture = TestBed.createComponent(FormularioNuevoProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
