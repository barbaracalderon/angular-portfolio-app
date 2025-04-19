import { Component, Input } from '@angular/core';
import { Card } from '../_models/card';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card = {} as Card;

  constructor(private dialog: MatDialog) {}

  openCardModal() {
    this.dialog.open(ModalComponent, {
      width: '800px',
      data: {
        card: this.card
      }
    });
  }
}