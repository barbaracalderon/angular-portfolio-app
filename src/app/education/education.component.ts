import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './education.component.html',
  styleUrls: [
    './education.component.css',
  ]
})
export class EducationComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Education')
  }
}
