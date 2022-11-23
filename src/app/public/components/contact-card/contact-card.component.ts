import { Component, Input, OnInit } from '@angular/core';
import { Contact, defaultContact } from 'src/app/core/interfaces/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor() { }
  @Input() contact: Contact = defaultContact;

  ngOnInit(): void {
  }

}
