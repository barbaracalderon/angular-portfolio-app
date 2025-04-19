import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Card } from '../_models/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register();

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: [
    './modal.component.css',
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalComponent {
  card: Card;
  swiperConfig: SwiperOptions = {
    pagination: { clickable: true },
    navigation: true,
    loop: true
  };

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Card }
  ) {
    this.card = data.card;
  }
}