import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
  templateUrl: 'index.html',
  styleUrls: ['global_styles.css'],
})
export class App {
  name = 'Angular';
  viewMode = 'map';
}

bootstrapApplication(App);
