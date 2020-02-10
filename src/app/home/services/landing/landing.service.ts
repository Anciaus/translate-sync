import { Injectable } from '@angular/core';

import { ElectronService } from '@app/core/services';

@Injectable()
export class LandingService {
  private readonly readFile: (
    path: string | Buffer | URL | number,
    options: any
  ) => Promise<string>;

  constructor(private electronService: ElectronService) {
    this.readFile = this.electronService.util.promisify(
      this.electronService.fs.readFile
    );
  }

  public readLanguageFilesFromPath(paths: string[]): Promise<string> {
    return this.readFile(paths[0], { encoding: 'utf8', flag: 'r' });
  }
}
