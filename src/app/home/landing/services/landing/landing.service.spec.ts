import { TestBed } from '@angular/core/testing';
import { ElectronService } from '../../../../core/services';

import { LandingService } from './landing.service';

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
