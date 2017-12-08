import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2> {{main}}</h2>
    <button (click)="onclick()">Click me</button>`


})
export class TutorialsComponent {
      public main = "hello hii tutorial"
    onclick(){
          console.log("clicked me");
    }

}