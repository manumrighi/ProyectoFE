import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ContactsComponent } from './contacts.component';
import { AgregarEditarContactoComponent } from '../../components/agregar-editar-contacto/agregar-editar-contacto.component';
import { VerContactoComponent } from '../../components/ver-contacto/ver-contacto.component';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'agregarContacto', component: AgregarEditarContactoComponent },
  { path: 'verContacto/:id', component: VerContactoComponent },
  { path: 'editarContacto/:id', component: AgregarEditarContactoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
