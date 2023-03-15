import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Whatever the HTML tag will be embedded
  templateUrl: './app.component.html', //HTML file being used.
  styleUrls: ['./app.component.css'] //You can have more than one style URL
})
export class AppComponent {
  //Any properities/methods used in the class
  title: string = 'Task Tracker';
}
