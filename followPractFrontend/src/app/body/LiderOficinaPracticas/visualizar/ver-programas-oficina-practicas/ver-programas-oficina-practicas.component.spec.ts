import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProgramasOficinaPracticasComponent } from './ver-programas-oficina-practicas.component';

describe('VerProgramasOficinaPracticasComponent', () => {
  let component: VerProgramasOficinaPracticasComponent;
  let fixture: ComponentFixture<VerProgramasOficinaPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerProgramasOficinaPracticasComponent]
    });
    fixture = TestBed.createComponent(VerProgramasOficinaPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
