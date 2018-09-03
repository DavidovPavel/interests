import { Component } from '@angular/core';
import { CloudOptions, CloudData, ZoomOnHoverOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 1000,
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    { text: 'Weight-1-link-color', weight: 1, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    { text: 'Weight-2-color', weight: 2, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 3 },
    { text: 'Weight-8-link-color', weight: 4, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 5 },
  ];

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3, // Elements will become 130 % of current zize on hover
    transitionTime: 1.2, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
    delay: 0.8, // Zoom will take affect after 0.8 seconds
  };

  constructor() {}

  logClicked(clicked: CloudData) {
    console.log(clicked);
  }
}
