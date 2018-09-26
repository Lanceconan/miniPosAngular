import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { PruebaService } from '../../services/prueba.service';

export interface DialogData {
  animal: string;
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

  public promesa:any;
  public observable:Array<any>;
  public subscribeElement: Subscription;
  mensaje: string;

  constructor(
    public dialog: MatDialog,
    private pruebaService: PruebaService
    
    ) { 

      this.observable = [];

      this.pruebaService.getTestPromesa().then(
        res1 => {
          console.log(res1);
          this.promesa =  res1;
        }, res2 => {
          console.log(res2);
          this.promesa =  res2;
        });     
        
        
    }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

  subscribirse(){
    this.observable.splice(0);
    this.subscribeElement = this.pruebaService.getTestObserbable().subscribe(
      res => {
        console.log(res);
        this.observable.push(res);
      }
    );
  }

  unSubscribirse(){
    
    this.subscribeElement.unsubscribe();    
  }

  putMensajeInput(mensaje: string){
    this.mensaje = mensaje;
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
