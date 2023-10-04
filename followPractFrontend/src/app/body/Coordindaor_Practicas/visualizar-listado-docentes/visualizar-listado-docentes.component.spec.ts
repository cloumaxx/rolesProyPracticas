import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarListadoDocentesComponent } from './visualizar-listado-docentes.component';

describe('VisualizarListadoDocentesComponent', () => {
  let component: VisualizarListadoDocentesComponent;
  let fixture: ComponentFixture<VisualizarListadoDocentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarListadoDocentesComponent]
    });
    fixture = TestBed.createComponent(VisualizarListadoDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
