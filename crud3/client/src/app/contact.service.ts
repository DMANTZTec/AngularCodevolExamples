import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Contact} from "./contact";
import 'rxjs/add/operator/map';
@Injectable()
export class ContactService {
  constructor(private http:Http) {
    console.log("contact service initialized");
  }
getContacts()
{
  return this.http.get('http://localhost:3001/api/contacts')
    .map(res=>res.json());
}
addContact(newcontact)
{
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3001/api/contact',newcontact,{headers:headers})
    .map(res=>res.json());
}
deleteContact(id)
{
  console.log(id);
  return this.http.delete('http://localhost:3001/api/contact/'+id)
    .map(res=>res.json());

}
}
