import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDocEstComponent } from './asignar-doc-est.component';

describe('AsignarDocEstComponent', () => {
  let component: AsignarDocEstComponent;
  let fixture: ComponentFixture<AsignarDocEstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarDocEstComponent]
    });
    fixture = TestBed.createComponent(AsignarDocEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
