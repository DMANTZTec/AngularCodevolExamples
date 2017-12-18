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
var BindComponent = (function () {
    function BindComponent() {
        this.title = "2 way Binding";
        this.showElement = true;
        this.color = 'red';
        this.colors = ['red', 'blue', 'green'];
    }
    BindComponent = __decorate([
        core_1.Component({
            selector: 'my-bind',
            template: '<h4>{{title}}</h4>' +
                '<p *ngIf="showElement">Show Element</p>' +
                '<div [ngSwitch]="color">' +
                '<p *ngSwitchDefault>Default color element</p>' +
                '</div>' +
                '<ul>' +
                '<li *ngFor="let color of colors">{{color}}</li></ul>'
        }), 
        __metadata('design:paramtypes', [])
    ], BindComponent);
    return BindComponent;
}());
exports.BindComponent = BindComponent;
//# sourceMappingURL=bind.component.js.map