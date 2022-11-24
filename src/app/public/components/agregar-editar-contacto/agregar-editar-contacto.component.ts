import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-editar-contacto',
  templateUrl: './agregar-editar-contacto.component.html',
  styleUrls: ['./agregar-editar-contacto.component.scss']
})
export class AgregarEditarContactoComponent implements OnInit { 
  form2: FormGroup


  constructor(private fb: FormBuilder) { 
    this.form2 = this.fb.group({
      name: ['', Validators.required], 
      number: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
