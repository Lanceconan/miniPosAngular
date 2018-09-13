import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/ClienteModel';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  formularioClientes: FormGroup;
  cliente: ClienteModel;

  constructor(private formBuilder: FormBuilder) {
    this.formularioClientes = this.formBuilder.group({
      rut : [''],
      nombre : [''],      
      apellidoPaterno : [''],
      apellidoMaterno : [''],
      nacionalidad : [''],
      fechaNacimiento : ['']
    });

   }

  ngOnInit() {
  }

  onSubmit(formularioClientes: FormGroup){

    this.cliente = new ClienteModel(
      null,
      formularioClientes.value.rut,
      formularioClientes.value.nombre,
      formularioClientes.value.apellidoPaterno,
      formularioClientes.value.apellidoMaterno,
      formularioClientes.value.nacionalidad,
      formularioClientes.value.fechaNacimiento
    );
        
  }

}
