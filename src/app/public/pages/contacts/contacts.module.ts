import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
