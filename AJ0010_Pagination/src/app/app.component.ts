import {
  Component
} from '@angular/core';
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  appTitle: string = 'Welcome';
  appList: any[] = [{
    "ID": "1",
    "Name": "One",
    "url":'/app/images/1.jpg'
  },
    {
      "ID": "2",
      "Name": "Two",
      "url": './images/one.jpg'
    } ];
}
