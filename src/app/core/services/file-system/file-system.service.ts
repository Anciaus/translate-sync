import { Injectable } from '@angular/core';

import { ElectronService } from '@app/core/services/electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {
  public readFile: (
    path: string | Buffer | URL | number,
    options: any
  ) => Promise<string>;

  constructor(private electronService: ElectronService) {
    this.readFile = this.electronService.util.promisify(
      this.electronService.fs.readFile
    );
  }
}
