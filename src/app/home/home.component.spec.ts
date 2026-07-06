/// <reference types="jasmine" />
import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(fakeAsync(() => {
    component.ngOnDestroy();
    discardPeriodicTasks();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set page title to "BC | Home"', () => {
    const titleService = TestBed.inject(Title);
    expect(titleService.getTitle()).toBe('BC | Home');
  });

  it('should initialise dynamicText as an empty string before ngOnInit', () => {
    const fresh = TestBed.createComponent(HomeComponent);
    expect(fresh.componentInstance.dynamicText).toBe('');
  });

  it('should advance dynamicText after type() is called', fakeAsync(() => {
    component.ngOnDestroy();
    component.currentCharIndex = 0;
    component.isDeleting = false;
    component.dynamicText = '';

    component.type();

    expect(component.dynamicText.length).toBe(1);
    discardPeriodicTasks();
  }));

  it('should build up dynamicText character by character while typing', fakeAsync(() => {
    component.ngOnDestroy();
    component.currentPhraseIndex = 0;
    component.currentCharIndex = 0;
    component.isDeleting = false;
    component.dynamicText = '';

    const phrase = component.phrases[0];

    for (let i = 0; i < phrase.length; i++) {
      component.type();
    }

    expect(component.dynamicText).toBe(phrase);
    discardPeriodicTasks();
  }));

  it('should switch to deleting mode after the full phrase is typed', fakeAsync(() => {
    component.ngOnDestroy();
    component.currentPhraseIndex = 0;
    component.currentCharIndex = component.phrases[0].length - 1;
    component.isDeleting = false;

    component.type();

    expect(component.isDeleting).toBeTrue();
    discardPeriodicTasks();
  }));

  it('should advance to the next phrase after fully deleting the current one', fakeAsync(() => {
    component.ngOnDestroy();
    component.currentPhraseIndex = 0;
    component.currentCharIndex = 1;
    component.isDeleting = true;

    component.type();

    expect(component.isDeleting).toBeFalse();
    expect(component.currentPhraseIndex).toBe(1);
    discardPeriodicTasks();
  }));

  it('should not call type() after ngOnDestroy cancels the timer', fakeAsync(() => {
    const typeSpy = spyOn(component, 'type').and.callThrough();

    component.ngOnDestroy();

    tick(component.delayBetweenPhrases + 1000);

    expect(typeSpy).not.toHaveBeenCalled();
    discardPeriodicTasks();
  }));

  it('should store a non-null timeoutId while a timer is pending', fakeAsync(() => {
    expect((component as any).timeoutId).not.toBeNull();
    discardPeriodicTasks();
  }));

  it('should render dynamicText in the #dynamic-text element', fakeAsync(() => {
    component.dynamicText = 'Software Developer.';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement.querySelector('#dynamic-text');
    expect(el.textContent).toBe('Software Developer.');
    discardPeriodicTasks();
  }));
});
