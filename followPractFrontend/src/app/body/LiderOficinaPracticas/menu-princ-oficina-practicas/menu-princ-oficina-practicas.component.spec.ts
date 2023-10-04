import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincOficinaPracticasComponent } from './menu-princ-oficina-practicas.component';

describe('MenuPrincOficinaPracticasComponent', () => {
  let component: MenuPrincOficinaPracticasComponent;
  let fixture: ComponentFixture<MenuPrincOficinaPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincOficinaPracticasComponent]
    });
    fixture = TestBed.createComponent(MenuPrincOficinaPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
