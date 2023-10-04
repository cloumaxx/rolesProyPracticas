import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseDialogComponentAspirantesComponent } from './response-dialog-component-aspirantes.component';

describe('ResponseDialogComponentAspirantesComponent', () => {
  let component: ResponseDialogComponentAspirantesComponent;
  let fixture: ComponentFixture<ResponseDialogComponentAspirantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseDialogComponentAspirantesComponent]
    });
    fixture = TestBed.createComponent(ResponseDialogComponentAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
