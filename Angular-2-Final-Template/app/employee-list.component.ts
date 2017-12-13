import {Component } from '@angular/core';
 @Component({
     selector: 'employee-list',
     template: `<h2>Employee List</h2>
     <ul *ngFor="let employee of employees">
         <li>{{employee.name}}</li>
     </ul>`
 })
export class EmployeeListComponent{
     employees =[
         {"id":1,"name":"Andrew","gender":"Male"},
         {"id":2,"name":"Andrew1","gender":"Male"},
         {"id":3,"name":"Andrew2","gender":"Male"},
         {"id":4,"name":"Andrew3","gender":"Female"},
         {"id":5,"name":"Andrew4","gender":"Female"},
     ]
 }