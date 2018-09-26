import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {


  @Input('name') propiedad1:string;
  @Input('animal') propiedad2:string;

  @Output() eventoSalida = new EventEmitter();

  evento:any = null;
  formularioHijoMensajes: FormGroup;
  
  constructor(private formHijo: FormBuilder) {
    this.formularioHijoMensajes = this.formHijo.group({
      mensaje1: [''],
      mensaje2: ['']      
    });
   }

  ngOnInit() {
  }

  enviarMensajeAlPadre(mensaje: any){
    this.evento = mensaje;
    this.eventoSalida.emit(this.evento);
  }

}
