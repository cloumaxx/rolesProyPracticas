import { TestBed } from '@angular/core/testing';

import { ProgramaServicesService } from './programa-services.service';

describe('ProgramaServicesService', () => {
  let service: ProgramaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
