import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '/src/styles.css'
  ]
})
export class AboutComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | About')
  }
}
