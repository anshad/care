import { TestBed, inject } from '@angular/core/testing';

import { HospitalsService } from './hospitals.service';

describe('HospitalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalsService]
    });
  });

  it('should be created', inject([HospitalsService], (service: HospitalsService) => {
    expect(service).toBeTruthy();
  }));
});
