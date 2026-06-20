import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // C1 regression guard: the header must never own a router-outlet.
  // Routing output belongs exclusively to ContentComponent.
  it('should not contain a router-outlet element', () => {
    const outlet = fixture.nativeElement.querySelector('router-outlet');
    expect(outlet).toBeNull();
  });

  it('should render the navbar element', () => {
    const navbar = fixture.nativeElement.querySelector('nav');
    expect(navbar).toBeTruthy();
  });

  it('should render five navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('li.nav-item a');
    expect(links.length).toBe(5);
  });

  it('should link to /home, /about, /skills, /portfolio and /contact', () => {
    const anchors: HTMLAnchorElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('li.nav-item a')
    );
    const hrefs = anchors.map(a => a.getAttribute('href'));
    expect(hrefs).toContain('/home');
    expect(hrefs).toContain('/about');
    expect(hrefs).toContain('/skills');
    expect(hrefs).toContain('/portfolio');
    expect(hrefs).toContain('/contact');
  });
});
