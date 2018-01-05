import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
contacts:Contact[];
contact:Contact;
ID:number;
FNAME:string;
LNAME:string;
TOWN:string;
constructor(private contactService:ContactService) { }

  addContact(form:NgForm)
  {
      console.log(form.value);
      var newcontact=form.value;
      console.log(newcontact);
     this.contactService.addContact(newcontact)
      .subscribe(contact=>{
        this.contacts.push(contact);
      });
  }
deleteContact(id)
{
  var contacts=this.contacts;
  this.contactService.deleteContact(id)
    .subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0;i<contacts.length;i++)
        {
          if(contacts[i].ID==id)
          {
            contacts.splice(i,1);
          }
        }
      }
    });
}
  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts=>this.contacts=contacts);
  }

}
