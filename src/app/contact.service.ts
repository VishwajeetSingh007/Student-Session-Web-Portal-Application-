import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(){
    const contactList=[
      {contactId: 1,contactName:'Angular'},
      {contactId: 2,contactName:'Tutorial'},
      {contactId: 3,contactName:'YouTube'},
      {contactId: 4,contactName:'Playlist'},
    ];
    return contactList;
  }
}
