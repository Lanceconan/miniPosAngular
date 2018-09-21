import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { StockService } from '../../services/stock.service';
import { StockModel } from '../../models/StockModel';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent implements OnInit {

  formularioStock: FormGroup;
  stock: StockModel;
  stocks: Array<StockModel>;

  displayedColumns: string[] = [ 'Nombre', 'Descripción', 'Cantidad', 'Valor Exento', 'Valor Impuestos', 'Valor Total', 'Acciones'];
  dataSource: MatTableDataSource<StockModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private stockService: StockService,
    private formBuilder: FormBuilder
  ) { 

    this.formularioStock = this.formBuilder.group({      
      nombre: [''],
      descripcion: [''],
      cantidad: [''],      
      valorExento: [''],
      valorImpuestos: [''],
      valorTotal: ['']
    });

    this.stocks = stockService.getAllStock();

    this.dataSource = new MatTableDataSource(this.stocks);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Item por Página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';
  }
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  limpiarFormulario(formulario: FormGroup) {
    formulario.reset();
  }

  getNextId() {
    return this.stocks.length + 1;
  }

  saveStock(formularioStock: FormGroup) {
  

    this.stock = new StockModel(
      this.getNextId(),
      formularioStock.value.nombre,
      formularioStock.value.descripcion,
      formularioStock.value.cantidad,
      formularioStock.value.valorTotal,
      formularioStock.value.valorExento,
      formularioStock.value.valorImpuestos
    );    
    
    this.stockService.saveStock(this.stock);
    console.log(this.stock);

    this.stocks.push(this.stock);
    this.dataSource = new MatTableDataSource(this.stocks);
    formularioStock.reset();

  }

  editStock(id:number){
    console.log('Se editará: ' + id);
  }  

  deleteStock(id:number){
    console.log('Se borrará: ' + id);
    this.stocks = this.stockService.deleteStock(id);
    this.dataSource = new MatTableDataSource(this.stocks);
  }

}
