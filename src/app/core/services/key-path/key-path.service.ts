import { Injectable } from '@angular/core';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class KeyPathService {

  constructor() { }

  public listKeysWithValues(jsonObject: any, path: string[] = []): string[][] {
    const keyValuePairs = R.toPairs(jsonObject);

    return R.map(([key, value]) => {
      const currentPath = R.concat(path, [key]);
      if (R.is(Object, value)) {
        return R.unnest(this.listKeysWithValues(value, currentPath));
      }

      return [R.join('.', currentPath), value];
    })(keyValuePairs);
  }
}
