import { Component, Input } from '@angular/core';
import { Card } from '../_models/card';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card = {} as Card;
}
