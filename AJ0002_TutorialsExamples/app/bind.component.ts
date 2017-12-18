import { Component } from '@angular/core';
import {NgSwitchWhen} from "@angular/common";

@Component({
    selector: 'my-bind',
    template: '<h4>{{title}}</h4>' +
    '<p *ngIf="showElement">Show Element</p>' +
    '<div [ngSwitch]="color">' +
    '<p *ngSwitchDefault>Default color element</p>' +
    '</div>' +
    '<ul>' +
    '<li *ngFor="let color of colors">{{color}}</li></ul>'
})
export class BindComponent {
    title="2 way Binding";
    public showElement=true;
    public color='red';
    public colors=['red','blue','green'];
}
