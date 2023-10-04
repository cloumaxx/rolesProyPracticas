import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarSemestresComponent } from './visualizar-semestres.component';

describe('VisualizarSemestresComponent', () => {
  let component: VisualizarSemestresComponent;
  let fixture: ComponentFixture<VisualizarSemestresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarSemestresComponent]
    });
    fixture = TestBed.createComponent(VisualizarSemestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
