import { Injectable, Type } from '@angular/core';
import { ClienteModel } from '../models/ClienteModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {
    
  clientes:Array<ClienteModel>;
  
  constructor(
    http: HttpClient
    ) { 
    
    this.clientes = [
      new ClienteModel(1, '17339126-9', 'ricardo', 'guerrero', 'alegria', new Date(), 'chilena'),
      new ClienteModel(2, '17339126-9', 'andres', 'andrade', 'perez', new Date(), 'chilena'),
      new ClienteModel(3, '17339126-9', 'gonzalo', 'gutierrez', 'gonzalez', new Date(), 'chilena'),
      new ClienteModel(4, '18864783-9', 'aaron', 'presley', 'dark', new Date(), 'gringa')
    ];
  }

  saveCliente(cliente: ClienteModel){
    this.clientes.push(cliente);
  }

  editCliente(){

  }

  getAllClientes(): Array<ClienteModel>{
    return this.clientes;
  }
  
  findCliente(param : string){

  }

  deleteCliente(id: number): Array<ClienteModel>{
    var i:number;
    var posicion:number;

    for(i = 0; i < this.clientes.length; i++){
      if(this.clientes[i].id == id){
        posicion = i;
      }
    }
    
    this.clientes.splice(posicion, 1);
    return this.clientes;
  }

  getAll(): Observable<ClienteModel[]> {
    return null;
  }


}
