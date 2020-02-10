import { TestBed } from '@angular/core/testing';

import { FileSystemService } from '@app/core/services';

import { LandingService } from '@app/home/services';

describe('LandingService', () => {

  let service: LandingService;

  let fileSystemService: FileSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FileSystemService,
        LandingService
      ]
    });
    service = TestBed.inject(LandingService);

    fileSystemService = TestBed.inject(FileSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('readLanguageFilesFromPath', () => {
    it('should be able to read one file path if provided', () => {
      // spyOn(fileSystemService, 'readFile').and.returnValue()
    });
  });
});
