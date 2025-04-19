import { Component, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Card } from '../_models/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

register();

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalComponent implements AfterViewInit {
  card: Card;
  swiperConfig: SwiperOptions = {
    pagination: {
      clickable: true,
      type: 'bullets',
      renderBullet: (index, className) => {
        return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  };

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Card }
  ) {
    this.card = data.card;
  }

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperConfig);
      swiperEl.initialize();
    }
  }
}