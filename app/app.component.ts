import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .active {
      color: orange !important;
    }
  `],
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  message = 'This is the sample message.';
}