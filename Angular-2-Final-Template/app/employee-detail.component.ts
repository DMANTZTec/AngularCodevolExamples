import {Component, } from '@angular/core';
import {EmployeeService} from './employee.service';


@Component({
    selector: 'employee-detail',
    template: `<h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
        <li>{{employee.id}}.{{employee.name}} - {{employee.gender}}</li>
    </ul> `
})
export class EmployeeDetailComponent {
    employee = [];
    constructor(private _employeeService: EmployeeService){}
    ngOnInit(){
        this.employees = this._employeeService.getEmployees();
    }
    employees=[];

}