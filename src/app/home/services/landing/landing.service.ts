import { Injectable } from '@angular/core';

import { FileSystemService } from '@app/core/services';

import { Translation } from '@app/home/models';

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

  public listKeys(jsonObject: any): string[] {
    return Object.keys(jsonObject);
  }

  private readFileForPath(path: string): Promise<string> {
    return this.fileSystemService.readFile(path, {
      encoding: 'utf8',
      flag: 'r'
    });
  }
}
