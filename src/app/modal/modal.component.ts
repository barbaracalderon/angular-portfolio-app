import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from '../_models/card';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './modal.component.html',
  styleUrls: 
  ['./modal.component.css',
  '/src/styles.css',
  ]
})
export class ModalComponent {

  card = {} as Card;

  constructor(public bsModalRef: BsModalRef) {

  }
}
