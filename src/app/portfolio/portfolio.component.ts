import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: Card[] = [
    {
    id: 0,
    name: 'Diário Oficial da União Restful API',
    summary: 'Test description',
    description: '',
    projectLink: '',
    tags: [Tag.PYTHON, Tag.JAVA],
    pictures: []
  }
]

  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }
}
