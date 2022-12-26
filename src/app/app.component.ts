import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitbang';
  threeJs = false;

  switched() {
    console.log('here')
    this.threeJs = !this.threeJs;
  }
}
