import { Component } from '@angular/core';


@Component({
    selector: 'my-tutorials',
    template: `<h2>{{name}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>`

})
export class TutorialsComponent {
name='The Joatman';
    
}
        
