import {Component} from '@angular/core';

@Component({
    selector: 'employee-detail',
    template: `<h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
        <li>{{employee.id}}.{{employee.name}} - {{employee.gender}}</li>
    </ul> `
})
export class EmployeeDetailComponent{

}