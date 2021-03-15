import { Injectable } from '@angular/core';
import { Contact } from './contacts.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contacts: Contact[] = [
    new Contact('James', 'Michael', 15432442, new Date(), '21 DowneenStreet'),
    new Contact('James', 'Michael', 15432442, new Date(), '21 DowneenStreet'),
  ];

  constructor() {}

  getAllContacts() {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  updateContact(index: number, updatedContact: Contact) {
    this.contacts[index] = updatedContact;
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
