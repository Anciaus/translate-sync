import { Component, OnInit } from '@angular/core';

import { ElectronService } from '@app/core/services';

import { Translation } from '@app/home/models';
import { LandingService } from '@app/home/services';

export const TRANSLATION_VALUES: Translation[] = [
  {
    key: 'ALL',
    en: 'All',
    de: 'Alle',
    lt: 'Visi'
  },
  {
    key: 'NEW',
    en: 'New',
    de: 'Neu',
    lt: 'Naujas'
  }
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public translationsSource: Translation[] = TRANSLATION_VALUES;
  public displayedColumns: string[] = ['key', 'en', 'de', 'lt'];

  constructor(
    private electronService: ElectronService,
    private landingService: LandingService
  ) {}

  ngOnInit(): void {}

  public showUploadDialog(): void {
    const { dialog } = this.electronService.remote;

    dialog
      .showOpenDialog({
        title: 'Open translation file',
        filters: [{ name: 'JSON', extensions: ['json'] }]
      })
      .then((value) => {
        if (!value.canceled) {
          return this.landingService.readLanguageFilesFromPath(value.filePaths);
        }
      })
      .then((fileContent) => console.log(fileContent));
  }
}
