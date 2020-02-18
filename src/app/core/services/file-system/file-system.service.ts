import { Injectable } from '@angular/core';

import { ElectronService } from '@app/core/services/electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {
  public readFile = this.electronService.util.promisify(
    this.electronService.fs.readFile
  );

  constructor(private electronService: ElectronService) { }
}
