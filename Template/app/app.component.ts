import { Component } from '@angular/core';
import {TutorialComponent} from "./tutorial.component";

@Component({
  selector: 'my-app',
  template: '<h1>Hello World</h1>' +
  '<my-tut></my-tut>',
    directives:[TutorialComponent]
})

export class AppComponent { }
