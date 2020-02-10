import { TestBed } from '@angular/core/testing';

import { ElectronService } from '@app/core/services';

import { LandingService } from '@app/home/services';

describe('LandingService', () => {
  let service: LandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ElectronService,
        LandingService
      ]
    });
    service = TestBed.inject(LandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
