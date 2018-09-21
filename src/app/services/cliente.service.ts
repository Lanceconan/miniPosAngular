import { Injectable } from '@angular/core';
import { ClienteModel } from '../models/ClienteModel';

@Injectable()
export class ClienteService {
  
  clientes:Array<ClienteModel>;
  
  constructor() { 
    
    this.clientes = [
      new ClienteModel(1, '17339126-9', 'daniel', 'gutierrez', 'pizarro', new Date(), 'chilena'),
      new ClienteModel(2, '17339126-9', 'daniel', 'gutierrez', 'pizarro', new Date(), 'chilena'),
      new ClienteModel(3, '17339126-9', 'daniel', 'gutierrez', 'pizarro', new Date(), 'chilena'),
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
    this.clientes.splice(id - 1, 1);
    return this.clientes;
  }


}
