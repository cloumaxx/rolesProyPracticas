import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincCoordinadorComponent } from './menu-princ-coordinador.component';

describe('MenuPrincCoordinadorComponent', () => {
  let component: MenuPrincCoordinadorComponent;
  let fixture: ComponentFixture<MenuPrincCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincCoordinadorComponent]
    });
    fixture = TestBed.createComponent(MenuPrincCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
