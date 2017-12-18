"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = "This is a tutorial";
        this.applyclass = true;
    }
    TutorialComponent.prototype.onClick = function (value) {
        console.log(value);
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tut',
            template: '<h4>{{title}}</h4>' +
                '<button (mouseover)="onClick(demoinput.value)">Click me</button>' +
                '<input type="text" #demoinput><br/>' +
                '<input type="text" [(ngModel)]="fname">' +
                '<input type="text" [(ngModel)]="lname">' +
                'Full name:{{fname}} {{lname}}',
            styles: ['.myClass{color: red;}']
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map