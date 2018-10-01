import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { PruebaService } from '../../services/prueba.service';
import { ThemePalette } from '@angular/material/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { ResolveStart } from '@angular/router';

declare var JQuery: any;
declare var $: any;

export interface DialogData {
  animal: string;
  name: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
  providers: [PruebaService]
})
export class PruebasComponent implements OnInit {

  animal: string;
  name: string;

  public promesa: any;
  public observable: Array<any>;
  public subscribeElement: Subscription;
  mensaje: string;

  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  
  fruits: Fruit[] = [
    { name: 'Limón' },
    { name: 'Lima' },
    { name: 'Manzana' },
    { name: 'Pera' },
  ];

  public badge1:number = this.getRandomInt(0, 100);
  public badge2:number = this.getRandomInt(0, 100);
  public badge3:number = this.getRandomInt(0, 100);

  public hideBadge:boolean;
  public nameAccionButton: string;

  constructor(
    public dialog: MatDialog,
    private pruebaService: PruebaService

  ) {

    this.observable = [];

    this.pruebaService.getTestPromesa().then(
      res1 => {
        console.log(res1);
        this.promesa = res1;
      }, res2 => {
        console.log(res2);
        this.promesa = res2;
      });

    this.mensaje = '';
    this.hideBadge = false;

    this.nameAccionButton = 'Ocultar';

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

  subscribirse() {
    this.observable.splice(0);
    this.subscribeElement = this.pruebaService.getTestObserbable().subscribe(
      res => {
        console.log(res);
        this.observable.push(res);
      }
    );
  }

  unSubscribirse() {

    this.subscribeElement.unsubscribe();
  }

  putMensajeInput(mensaje: string) {
    this.mensaje = mensaje;
  }

  toggleDiv() {
    $('.promesa-observable').slideToggle();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  sumar(){
    this.hideBadge = false;
    this.badge1++;
    this.badge2++;
    this.badge3++;    
    
  }

  restar(){
    this.hideBadge = false;
    this.badge1--;
    this.badge2--;
    this.badge3--;    
  }

  esconderBadge(){
    this.hideBadge = !this.hideBadge;
    this.nameAccionButton = this.hideBadge? 'Mostrar': 'Ocultar';
    this.badge1 = this.getRandomInt(0, 100); 
    this.badge2 = this.getRandomInt(0, 100); 
    this.badge3 = this.getRandomInt(0, 100);    
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}

//************************************************************************************ */

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
