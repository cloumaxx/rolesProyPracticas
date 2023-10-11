import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCoordinadoresOficinaPracticasComponent } from './ver-coordinadores-oficina-practicas.component';

describe('VerCoordinadoresOficinaPracticasComponent', () => {
  let component: VerCoordinadoresOficinaPracticasComponent;
  let fixture: ComponentFixture<VerCoordinadoresOficinaPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCoordinadoresOficinaPracticasComponent]
    });
    fixture = TestBed.createComponent(VerCoordinadoresOficinaPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
