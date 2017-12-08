import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2> {{main}}</h2>
    
    <input type="text" [(ngModel)]="fname">
    <input type="text" [(ngModel)]="lname">
    Full name:{{fname}} {{lname}}`


})
export class TutorialsComponent {
      public main = "hello hii tutorial";

    public fname;
      public lname;

}