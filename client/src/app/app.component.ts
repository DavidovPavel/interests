import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<header><app-top></app-top></header>
<main><router-outlet></router-outlet></main>
<footer></footer>`
})
export class AppComponent {
  constructor() {}
}
