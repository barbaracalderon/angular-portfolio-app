/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ModalComponent } from './modal.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

const MOCK_CARD: Card = {
  id: 1,
  name: 'Test Project',
  summary: 'A short summary',
  description: 'A detailed description of the project',
  projectLink: 'https://github.com/test',
  pictures: ['pic1.png', 'pic2.png'],
  tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PYTHON]
};

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ModalComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [ModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { card: MOCK_CARD } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngAfterViewInit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign card from MAT_DIALOG_DATA', () => {
    expect(component.card).toEqual(MOCK_CARD);
  });

  it('should render card.name in the modal title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('.modal-title');
    expect(title.textContent).toContain('Test Project');
  });

  it('should render card.description', () => {
    const paragraphs: HTMLElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.p-modal')
    );
    const combined = paragraphs.map(p => p.textContent).join(' ');
    expect(combined).toContain('A detailed description of the project');
  });

  it('should render one mat-chip per tag', () => {
    const chips: NodeList = fixture.nativeElement.querySelectorAll('mat-chip');
    expect(chips.length).toBe(3);
  });

  it('should call dialogRef.close when the close button is clicked', () => {
    const closeBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.close-button');
    closeBtn.click();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
