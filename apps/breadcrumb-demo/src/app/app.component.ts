import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-xng-app';
  darkMode = false;

  constructor(private router: Router) {}

  updateTheme(theme) {
    this.darkMode = theme === 'dark';
  }

  handleRoute(link) {
    console.log(link);
    return link;
  }
}
