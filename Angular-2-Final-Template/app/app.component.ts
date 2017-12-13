import { Component } from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html'
})
export class AppComponent {
userForm = new FormControl({
    name : new FormControl('bradon'),
    email : new FormControl(),
    address : new FormGroup({
        street : new FormControl(),
        city : new FormControl(),
        postalcode : new FormControl()

    })
});
onSubmit(){
  console.log(this.userForm.value);
}
}
