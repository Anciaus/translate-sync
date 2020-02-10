import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronService } from '../../core/services';

import { LandingComponent } from './landing.component';
import { TranslateModule } from '@ngx-translate/core';
import { LandingService } from './services/landing/landing.service';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingComponent
      ],
      imports: [TranslateModule.forRoot()],
      providers: [
        ElectronService,
        LandingService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'PAGES.HOME.TITLE'
    );
  }));
});
