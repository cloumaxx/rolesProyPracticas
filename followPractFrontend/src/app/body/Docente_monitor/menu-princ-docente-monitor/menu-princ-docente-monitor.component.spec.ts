import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincDocenteMonitorComponent } from './menu-princ-docente-monitor.component';

describe('MenuPrincDocenteMonitorComponent', () => {
  let component: MenuPrincDocenteMonitorComponent;
  let fixture: ComponentFixture<MenuPrincDocenteMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincDocenteMonitorComponent]
    });
    fixture = TestBed.createComponent(MenuPrincDocenteMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
