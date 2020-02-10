import { Injectable } from '@angular/core';

import { FileSystemService } from '@app/core/services';

@Injectable()
export class LandingService {
  constructor(private fileSystemService: FileSystemService) {}

  public readLanguageFilesFromPath(paths: string[]): Promise<string> {
    return this.fileSystemService.readFile(paths[0], {
      encoding: 'utf8',
      flag: 'r'
    });
  }
}
