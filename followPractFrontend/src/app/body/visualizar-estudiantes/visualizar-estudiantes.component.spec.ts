import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstudiantesComponent } from './visualizar-estudiantes.component';

describe('VisualizarEstudiantesComponent', () => {
  let component: VisualizarEstudiantesComponent;
  let fixture: ComponentFixture<VisualizarEstudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarEstudiantesComponent]
    });
    fixture = TestBed.createComponent(VisualizarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
