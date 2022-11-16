import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/public/interfaces/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor() { }
  @Input() contact!: Contact;

  ngOnInit(): void {
  }

}
