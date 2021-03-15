import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contacts.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.contacts = this.dataService.getAllContacts();
  }
}
