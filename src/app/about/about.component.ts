import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
  ]
})
export class AboutComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | About')
  }
}
