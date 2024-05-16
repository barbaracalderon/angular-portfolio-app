import { Component, Input } from '@angular/core';
import { CardModel } from '../_models/card';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardModel = {} as CardModel;
}
