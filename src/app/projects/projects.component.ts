import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test description',
    description: '',
    projectLink: '',
    tags: ['Angular', 'Typescript'],
    pictures: []
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Projects')
  }
}
