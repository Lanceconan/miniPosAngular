import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteModel } from '../../models/ClienteModel';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {

  @Input('clienteModel') cliente: ClienteModel;
  @Output() eventoLimpiar = new EventEmitter;

  constructor(
    
  ) {

   }

  ngOnInit() {
  }

  enviarEvento(){
    this.eventoLimpiar.emit();
  }
  
}
