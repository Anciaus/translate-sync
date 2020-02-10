import { Component, OnInit } from '@angular/core';
import { FileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import Remote = Electron.Remote;

export interface Translation {
  key: string;
  [lang: string]: string;
}

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

  private remote: Remote;
  private fs: FileSystem;

  constructor() {
    if ((<any>window).require) {
      try {
        this.remote = (<any>window).require('electron').remote;
        this.fs = (<any>window).require('electron').fs;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  ngOnInit(): void {}

  public showUploadDialog(): void {
    const { dialog } = this.remote;

    dialog
      .showOpenDialog({
        title: 'Open translation file',
        filters: [{ name: 'JSON', extensions: ['json'] }]
      })
      .then((value) => {
        if (!value.canceled) {
          console.log(value.filePaths);
        }
      });
  }
}
