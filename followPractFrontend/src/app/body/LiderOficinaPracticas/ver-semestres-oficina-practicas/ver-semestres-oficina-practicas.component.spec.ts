import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSemestresOficinaPracticasComponent } from './ver-semestres-oficina-practicas.component';

describe('VerSemestresOficinaPracticasComponent', () => {
  let component: VerSemestresOficinaPracticasComponent;
  let fixture: ComponentFixture<VerSemestresOficinaPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerSemestresOficinaPracticasComponent]
    });
    fixture = TestBed.createComponent(VerSemestresOficinaPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
