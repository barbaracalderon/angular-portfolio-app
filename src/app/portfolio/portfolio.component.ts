import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 0,
      name: 'Diário Oficial da União Restful API',
      summary: 'Test description',
      description: '',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.INSOMNIA, Tag.POSTGRESQL, Tag.SQLALCHEMY],
      pictures: ["../../assets/hands.jpg", "../../assets/hands.jpg", "../../assets/hands.jpg"]
    },
    {
      id: 1,
      name: 'Slot Machine Game',
      summary: 'The slot machine game played in Casinos recreated in Python',
      description: '',
      projectLink: '',
      tags: [Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/hands.jpg"]
    }
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
