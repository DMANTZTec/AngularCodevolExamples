import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:`department-list`,
    template:`<h3>Department List</h3>
    <ul class="items">
        <li (click)="onselect(department)" *ngFor="let department of departments">
            <span class="badge">{{department.id}}</span>
            {{department.name}}
        </li>
    </ul>`
})
export class DepartmentListComponent{
    constructor(private router:Router){}
    departments = [
        {"id":1,"name":"Angular"},
        {"id":2,"name":"Node"},
        {"id":3,"name":"MongoDB"},
        {"id":4,"name":"Ruby"},
        {"id":5,"name":"Bootstrap"}
    ]

    onselect(department){
        this.router.navigate(['/departments',this.department.id]);
    }
}
