import { Component, Input } from '@angular/core';
import { Card } from '../_models/card';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [BsModalService],
})

export class CardComponent {
  @Input() card = {} as Card;
  bsModalRef? : BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  OpenCardModal() {
    this.bsModalRef = this.modalService.show('');
  }
}
