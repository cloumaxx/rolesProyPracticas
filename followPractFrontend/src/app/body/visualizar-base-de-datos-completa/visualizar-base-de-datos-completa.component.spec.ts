import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarBaseDeDatosCompletaComponent } from './visualizar-base-de-datos-completa.component';

describe('VisualizarBaseDeDatosCompletaComponent', () => {
  let component: VisualizarBaseDeDatosCompletaComponent;
  let fixture: ComponentFixture<VisualizarBaseDeDatosCompletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarBaseDeDatosCompletaComponent]
    });
    fixture = TestBed.createComponent(VisualizarBaseDeDatosCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
