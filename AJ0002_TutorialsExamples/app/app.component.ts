import { Component } from '@angular/core';
import {TutorialComponent} from "./tutorial.component";
import {BindComponent} from "./bind.component";
import {AttributeComponent} from "./attribute.component";
import {NgStyle} from "@angular/common";
import {InputsoutputsComponent} from "./inputsoutputs.component";

@Component({
  selector: 'my-app',
  template: '<h1>Hello World</h1>' +
  '<label>Enter Parent component</label>' +
  '<input type="text" #ptext (keyup)="0">' +
  '<p>Value from child component</p>' +
  '{{childData}}' +
  '<my-tut></my-tut>'+
    '<my-bind></my-bind>'+
    '<my-attr></my-attr>'+
    '<my-inp (childEvent)="childData=$event" [parentData]="ptext.value"></my-inp>' ,
    directives : [TutorialComponent, BindComponent, AttributeComponent, InputsoutputsComponent]
})

export class AppComponent {
  public childData:string;
}
