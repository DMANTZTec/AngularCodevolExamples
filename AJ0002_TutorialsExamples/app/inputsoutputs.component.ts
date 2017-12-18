import { Component } from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
    selector: 'my-inp',
    template: '<h4>{{title}}</h4>' +
    '<label>Enter child component</label>' +
    '<input type="text" #childtext (keyup)="onChange(childtext.value)">' +
    '<p>Value from parent component</p>' +
    '{{parentData}} ',
    inputs:['parentData'],
    outputs:['childEvent']
})
export class InputsoutputsComponent {
    title="Inputs outputs";
    public parentData:string;
    childEvent=new EventEmitter<string>();
    onChange(value:string){
        this.childEvent.emit(value);
    }


}
