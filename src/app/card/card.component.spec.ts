/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { CardComponent } from './card.component';
import { ModalComponent } from '../modal/modal.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

const MOCK_CARD: Card = {
  id: 1,
  name: 'Test Project',
  summary: 'A short summary',
  description: 'A longer description',
  projectLink: 'https://github.com/test',
  pictures: ['pic1.png'],
  tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
};

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [{ provide: MatDialog, useValue: dialogSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = MOCK_CARD;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card.name in the card title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('.card-title');
    expect(title.textContent).toContain('Test Project');
  });

  it('should render card.summary in the card text', () => {
    const text: HTMLElement = fixture.nativeElement.querySelector('.card-text');
    expect(text.textContent).toContain('A short summary');
  });

  it('should render one tag chip per tag', () => {
    const tags: NodeList = fixture.nativeElement.querySelectorAll('.tag');
    expect(tags.length).toBe(2);
  });

  it('should open the modal dialog with the card data when the button is clicked', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(dialogSpy.open).toHaveBeenCalledOnceWith(
      ModalComponent,
      jasmine.objectContaining({ data: { card: MOCK_CARD } })
    );
  });
});
