import { Component, OnInit } from '@angular/core';
import { CloudOptions, CloudData, ZoomOnHoverOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: CloudOptions = {
    width: 1000,
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    { text: 'Weight-1-link-color', weight: 1, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    { text: 'Weight-2-color', weight: 2, color: '#ffaaee' },
    { text: 'Weight-3-link', weight: 3 },
    { text: 'Weight-4-link-color', weight: 4, color: '#ffaaee' },
    { text: 'Weight-5-link', weight: 5 },
  ];

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3,
    transitionTime: 0.4
  };

  constructor() { }

  ngOnInit() {
  }

  logClicked(clicked: CloudData) {
    console.log(clicked);
  }

}
