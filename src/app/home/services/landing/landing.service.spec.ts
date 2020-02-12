import { TestBed } from '@angular/core/testing';

import { FileSystemService } from '@app/core/services';

import { LandingService } from '@app/home/services';

describe('LandingService', () => {
  let service: LandingService;

  let fileSystemService: FileSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSystemService, LandingService]
    });
    service = TestBed.inject(LandingService);

    fileSystemService = TestBed.inject(FileSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('readLanguageFilesFromPath', () => {
    it('should read one file for path provided', () => {
      const readFileSpy = spyOn(fileSystemService, 'readFile').and.returnValue(
        new Promise(() => ({ aaa: { bbb: 'ccc' } }))
      );

      service.readLanguageFilesFromPath(['en.json']);

      expect(readFileSpy).toHaveBeenCalled();
    });

    it('should read multiple files for paths provided', () => {
      const readFileSpy = spyOn(fileSystemService, 'readFile').and.returnValue(
        new Promise(() => ({ aaa: { bbb: 'ccc' } }))
      );

      service.readLanguageFilesFromPath(['en.json', 'de.json']);

      expect(readFileSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('listKeysWithValues', () => {
    it('should return all keys in an object', () => {
      const jsonObject = {
        A: 'a',
        B: 'b',
        C: 'c'
      };

      const result = service.listKeysWithValues(jsonObject);

      expect(result).toEqual([
        ['A', 'a'],
        ['B', 'b'],
        ['C', 'c']
      ]);
    });

    it('should return nested keys separated by .', () => {
      const jsonObject = {
        A: { B: 'b' },
        C: { D: 'd' }
      };

      const result = service.listKeysWithValues(jsonObject);

      expect(result).toEqual([
        ['A.B', 'b'],
        ['C.D', 'd']
      ]);
    });
  });
});
