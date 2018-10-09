import { Component, OnInit } from '@angular/core';
import { FatherComponent } from '../father/father.component';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  public num:number = 2;
  
  constructor(
    private father: FatherComponent
  ) { 
    this.father.emitterRandomNumber.subscribe((response:number) => {
      this.num = response;
    });
  }

  ngOnInit() {
    
  }

  activarEvento(){
    this.father.sendRandomNumber();
  }  

}
