import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from '../_models/card';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  card = {} as Card;

  constructor(public bsModalRef: BsModalRef) {

  }
}
