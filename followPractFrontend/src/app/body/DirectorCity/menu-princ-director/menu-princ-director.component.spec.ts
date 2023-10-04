import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincDirectorComponent } from './menu-princ-director.component';

describe('MenuPrincDirectorComponent', () => {
  let component: MenuPrincDirectorComponent;
  let fixture: ComponentFixture<MenuPrincDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincDirectorComponent]
    });
    fixture = TestBed.createComponent(MenuPrincDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
