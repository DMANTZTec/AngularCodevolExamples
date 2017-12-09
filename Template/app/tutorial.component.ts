import { Component } from '@angular/core';
@Component({
    selector: 'my-tut',
    template: '<h4>{{title}}</h4>' +
    '<div [class.myClass]="applyclass">apply</div>',
    styles:['.myClass{color: red;}']
})
export class TutorialComponent {
    title="This is a tutorial";
    public applyclass=true;
}
