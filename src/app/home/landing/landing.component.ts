import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public translationsSource: Translation[] = TRANSLATION_VALUES;
  public displayedColumns: string[] = ['key', 'en', 'de', 'lt'];

  constructor() {}

  ngOnInit(): void {}
}

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
