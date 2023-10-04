import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOfcPracticasComponent } from './nav-bar-ofc-practicas.component';

describe('NavBarOfcPracticasComponent', () => {
  let component: NavBarOfcPracticasComponent;
  let fixture: ComponentFixture<NavBarOfcPracticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarOfcPracticasComponent]
    });
    fixture = TestBed.createComponent(NavBarOfcPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
