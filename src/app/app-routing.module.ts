import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () =>
      import('./public/pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:"login",
    loadChildren: () =>
      import('./public/pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path:"contacts",
    loadChildren: () =>
      import('./public/pages/contacts/contacts.module').then((m) => m.ContactsModule)
  },
  {
    path:"register",
    loadChildren: () =>
      import('./public/pages/register/register.module').then((m) => m.RegisterModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
