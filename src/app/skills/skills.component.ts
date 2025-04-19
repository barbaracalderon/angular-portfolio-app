import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.css',
  ]
})
export class SkillsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Education')
  }
}
