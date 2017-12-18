import { Component } from '@angular/core';
@Component({
    selector: 'my-tut',
    template: '<h4>{{title}}</h4>' +
    '<button (mouseover)="onClick(demoinput.value)">Click me</button>' +
    '<input type="text" #demoinput><br/>' +
    '<input type="text" [(ngModel)]="fname">' +
    '<input type="text" [(ngModel)]="lname">' +
    'Full name:{{fname}} {{lname}}' ,
    styles:['.myClass{color: red;}']
})
export class TutorialComponent {
    title="This is a tutorial";
    public applyclass=true;
    public fname;
    lname;
    onClick(value)
    {
console.log(value);
    }
}
