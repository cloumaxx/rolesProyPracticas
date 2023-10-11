import { TestBed } from '@angular/core/testing';

import { CoordinadorServicesService } from './coordinador-services.service';

describe('CoordinadorServicesService', () => {
  let service: CoordinadorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinadorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
