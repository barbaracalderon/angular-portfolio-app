import { Component, Input } from '@angular/core';
import { Card } from '../_models/card';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css',
    '/src/styles.css'
  ],
  providers: [BsModalService],
})

export class CardComponent {
  @Input() card = {} as Card;
  bsModalRef? : BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  OpenCardModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        card: this.card
      }
    }
    this.bsModalRef = this.modalService.show(ModalComponent, modalOptions);
  }
}
