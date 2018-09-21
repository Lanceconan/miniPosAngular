import { Injectable } from '@angular/core';
import { StockModel } from '../models/StockModel';

@Injectable()
export class StockService {
  
  stocks: Array<StockModel>;
  saveStock(stock: StockModel): any {
    
  }

  constructor() {
    this.stocks = [
      new StockModel(1, 'Paltas', 'Están Maduras', 10000, 1000, 1000, 1000),
      new StockModel(2, 'Tomates', 'Están Maduros', 1000, 100000, 1000, 1000),
      new StockModel(3, 'Vienesas', 'Son veganas', 1000, 1000, 1000000, 1000),
      new StockModel(4, 'Ketchup', 'Tomate natural', 1000, 1000, 1000, 10000000),
    ];

  }

  getAllStock():Array<StockModel>{
    return this.stocks;
  }

  deleteStock(id: number): Array<StockModel>{
    var i:number = 0;
    var posicion:number;

    for(i=0; i < this.stocks.length;i++){
      if(this.stocks[i].id == id){
        posicion = i;        
      }
    }    
    
    this.stocks.splice(posicion, 1);
    return this.stocks;
  }
}
