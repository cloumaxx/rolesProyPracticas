import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseDialogComponentComponent } from './response-dialog-component.component';

describe('ResponseDialogComponentComponent', () => {
  let component: ResponseDialogComponentComponent;
  let fixture: ComponentFixture<ResponseDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseDialogComponentComponent]
    });
    fixture = TestBed.createComponent(ResponseDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
