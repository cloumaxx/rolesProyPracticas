import { TestBed } from '@angular/core/testing';

import { SemestreService } from './semestre-services.service';

describe('SemestreServicesService', () => {
  let service: SemestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
