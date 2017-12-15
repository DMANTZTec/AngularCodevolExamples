import {Injectable} from "@angular/core";
@Injectable
export class EmployeeService {
    getEmployees() {
        return [
            {"id": 1, "name": "shanthi", "gender": "Male"},
            {"id": 2, "name": "shashi", "gender": "Male"},
            {"id": 3, "name": "sravan", "gender": "Male"},
            {"id": 4, "name": "vandana", "gender": "Female"},
            {"id": 5, "name": "tejaswini", "gender": "Female"},
        ]
    }
}