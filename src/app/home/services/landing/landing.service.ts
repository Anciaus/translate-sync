import { Injectable } from '@angular/core';

import { FileSystemService } from '@app/core/services';

@Injectable()
export class LandingService {
  constructor(private fileSystemService: FileSystemService) {}

  public readLanguageFilesFromPath(paths: string[]): Promise<string>[] {
    return paths.map((path: string) => this.readFileForPath(path));
  }

  private readFileForPath(path: string): Promise<string> {
    return this.fileSystemService.readFile(path, {
      encoding: 'utf8',
      flag: 'r'
    });
  }
}
