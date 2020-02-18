import { Injectable } from '@angular/core';

import { FileSystemService, KeyPathService } from '@app/core/services';

import { Translation } from '@app/home/models';

import * as R from 'ramda';

@Injectable()
export class LandingService {
  constructor(
    private fileSystemService: FileSystemService,
    private keyPathService: KeyPathService
  ) {}

  public getParsedTranslations(paths): Promise<Translation[]> {
    const translationsByLanguage = paths.map((path) => [
      this.getFilename(path),
      this.deserializeObjectFromFile(path)
    ]);

    R.groupBy();

    return this.readLanguageFilesFromPath(paths)
      .then((fileContents) =>
        R.unnest(
          fileContents.map((file) =>
            this.keyPathService.listKeysWithValues(file)
          )
        )
      )
      .then((translations) => this.groupTranslationsByKey(translations));
  }

  public groupTranslationsByKey(translations: string[][]): Translation[] {
    return null;
  }

  public readLanguageFilesFromPath(paths: string[]): Promise<string[]> {
    return Promise.all(paths.map((path: string) => this.readFileForPath(path)));
  }

  private getFilename(path: string): string {
    return R.last(path.split('/'));
  }

  private deserializeObjectFromFile(path: string): Promise<any> {
    return this.readFileForPath(path).then((stringObject) =>
      JSON.parse(stringObject)
    );
  }

  private readFileForPath(path: string): Promise<string> {
    return this.fileSystemService.readFile(path, {
      encoding: 'utf8',
      flag: 'r'
    });
  }
}
