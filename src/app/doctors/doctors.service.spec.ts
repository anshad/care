import { TestBed, inject } from '@angular/core/testing';

import { DoctorsService } from './doctors.service';

describe('DoctorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorsService]
    });
  });

  it('should be created', inject([DoctorsService], (service: DoctorsService) => {
    expect(service).toBeTruthy();
  }));
});
