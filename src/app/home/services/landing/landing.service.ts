import { Injectable } from '@angular/core';

import { FileSystemService } from '@app/core/services';

import { Translation } from '@app/home/models';

import * as R from 'ramda';

@Injectable()
export class LandingService {
  constructor(private fileSystemService: FileSystemService) {}

  public getParsedTranslations(paths): Promise<Translation[]> {
    this.readLanguageFilesFromPath(paths).then((fileContents) => fileContents);

    return null;
  }

  public readLanguageFilesFromPath(paths: string[]): Promise<string[]> {
    return Promise.all(paths.map((path: string) => this.readFileForPath(path)));
  }

  public listKeysWithValues(jsonObject: any, path: string[] = []): string[][] {
    const keyValuePairs = R.toPairs(jsonObject);

    return keyValuePairs.map(([key, value]) => {
      const currentPath = path.concat([key]);
      if (R.type(value) === 'Object') {
        return R.unnest(this.listKeysWithValues(value, currentPath));
      }

      return [currentPath.join('.'), value];
    });
  }

  private readFileForPath(path: string): Promise<string> {
    return this.fileSystemService.readFile(path, {
      encoding: 'utf8',
      flag: 'r'
    });
  }
}
