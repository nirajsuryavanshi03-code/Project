import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './sections/contact/contact';
import { Projects } from './sections/projects/projects';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Services } from './sections/services/services';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    Hero,
    About,
    Services,
    Projects,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fabrication-site');
}
