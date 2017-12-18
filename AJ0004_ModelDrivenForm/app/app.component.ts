import { Component } from '@angular/core';
import {FormControl, FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
    styles:['input.ng-invalid{border-left: 5px solid red;}' +
    'input.ng-valid{border-left: 5px solid green;}']
})
export class AppComponent {
  onSubmit()
  {
    console.log(this.userForm.value);
  }
  userForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl(),
      address:new FormGroup({
      street:new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl()
})
  });

}
