import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
@Component({
    selector: 'my-attr',
    template: '<h4>{{title}}</h4>' +
    '<p [ngClass]="{classone:cone,classtwo:ctwo}">ng class paragraph</p>' +
    //'<p [ngStyle]="{'font-style':style,'font-size':size1}">ng style paragraph</p>' +
    '<button (click)="toggle()">toggle</button>',
    styles:['.classone{color: red}.classtwo{background-color:orange}']
})
export class AttributeComponent {
    title="Attribute";
    cone=false;
    ctwo=false;
    public style='italic';
    public size1='30px';
    toggle()
    {
        this.cone=!this.cone;
        this.ctwo=!this.ctwo;

    }
}
