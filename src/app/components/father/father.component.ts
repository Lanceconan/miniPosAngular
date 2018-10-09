import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {

  @Output() emitterRandomNumber:EventEmitter<number> = new EventEmitter();
  
  constructor(){    
  }
  
  sendRandomNumber(){
    var num:number = Math.floor(Math.random() * 100);
    this.emitterRandomNumber.emit(num);
  }

}
