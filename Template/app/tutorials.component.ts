import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2> {{main}}</h2>
    <p *ngIf= "showElement">showElement</p>
    <div [ngSwitch]="color">
        <p *ngSwitchWhen="'red'">red color is shown</p>
        <p *ngSwitchWhen="'blue'">blue color is shown</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div> `
})
export class TutorialsComponent {
    public main = "hello hii tutorial";
    public showElement = false;
    public   color = 'white';

}