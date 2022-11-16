import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  contacts: Contact[]=[];

  ngOnInit(): void {
  }

}
