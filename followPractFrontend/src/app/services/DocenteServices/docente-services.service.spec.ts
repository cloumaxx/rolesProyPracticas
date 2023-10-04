import { TestBed } from '@angular/core/testing';

import { DocenteServicesService } from './docente-services.service';

describe('DocenteServicesService', () => {
  let service: DocenteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
