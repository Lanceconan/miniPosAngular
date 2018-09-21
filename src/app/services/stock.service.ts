import { Injectable } from '@angular/core';
import { StockModel } from '../models/StockModel';

@Injectable()
export class StockService {
  
  stocks: Array<StockModel>;
  saveStock(stock: StockModel): any {
    
  }

  constructor() {
    this.stocks = [
      new StockModel(1, 'Paltas', 'Están Maduras', 1000, 1000, 1000, 1000),
      new StockModel(2, 'Tomates', 'Están Maduros', 1000, 1000, 1000, 1000),
      new StockModel(3, 'Vienesas', 'Son veganas', 1000, 1000, 1000, 1000),
      new StockModel(4, 'Ketchup', 'Tomate natural', 1000, 1000, 1000, 1000),
    ];

  }

  getAllStock():Array<StockModel>{
    return this.stocks;
  }

  deleteStock(id: number): Array<StockModel>{
    this.stocks.splice(id - 1, 1);
    return this.stocks;
  }
}
