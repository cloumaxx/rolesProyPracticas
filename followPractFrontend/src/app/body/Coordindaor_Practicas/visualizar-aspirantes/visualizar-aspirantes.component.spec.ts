import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAspirantesComponent } from './visualizar-aspirantes.component';

describe('VisualizarAspirantesComponent', () => {
  let component: VisualizarAspirantesComponent;
  let fixture: ComponentFixture<VisualizarAspirantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarAspirantesComponent]
    });
    fixture = TestBed.createComponent(VisualizarAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
