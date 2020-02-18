import { TestBed } from '@angular/core/testing';

import { KeyPathService } from './key-path.service';

describe('KeyPathService', () => {
  let service: KeyPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        KeyPathService
      ]
    });
    service = TestBed.inject(KeyPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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
