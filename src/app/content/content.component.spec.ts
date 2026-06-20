import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // C1 regression guard: ContentComponent must be the single and only router-outlet
  // in the application. A second outlet (e.g. in HeaderComponent) causes every
  // routed page to render twice.
  it('should contain exactly one router-outlet element', () => {
    const outlets = fixture.nativeElement.querySelectorAll('router-outlet');
    expect(outlets.length).toBe(1);
  });
});
