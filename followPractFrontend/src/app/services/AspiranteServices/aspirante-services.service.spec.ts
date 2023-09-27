import { TestBed } from '@angular/core/testing';

import { AspiranteServicesService } from './aspirante-services.service';

describe('AspiranteServicesService', () => {
  let service: AspiranteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspiranteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
