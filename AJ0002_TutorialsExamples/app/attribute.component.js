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
var AttributeComponent = (function () {
    function AttributeComponent() {
        this.title = "Attribute";
        this.cone = false;
        this.ctwo = false;
        this.style = 'italic';
        this.size1 = '30px';
    }
    AttributeComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    AttributeComponent = __decorate([
        core_1.Component({
            selector: 'my-attr',
            template: '<h4>{{title}}</h4>' +
                '<p [ngClass]="{classone:cone,classtwo:ctwo}">ng class paragraph</p>' +
                //'<p [ngStyle]="{'font-style':style,'font-size':size1}">ng style paragraph</p>' +
                '<button (click)="toggle()">toggle</button>',
            styles: ['.classone{color: red}.classtwo{background-color:orange}']
        }), 
        __metadata('design:paramtypes', [])
    ], AttributeComponent);
    return AttributeComponent;
}());
exports.AttributeComponent = AttributeComponent;
//# sourceMappingURL=attribute.component.js.map