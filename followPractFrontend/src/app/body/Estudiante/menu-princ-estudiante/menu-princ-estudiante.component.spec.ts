import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincEstudianteComponent } from './menu-princ-estudiante.component';

describe('MenuPrincEstudianteComponent', () => {
  let component: MenuPrincEstudianteComponent;
  let fixture: ComponentFixture<MenuPrincEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincEstudianteComponent]
    });
    fixture = TestBed.createComponent(MenuPrincEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
