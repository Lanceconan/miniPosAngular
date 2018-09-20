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

  displayedColumns: string[] = ['Rut', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Fecha de Nacimiento', 'Nacionalidad'];
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
      valorTotal: [''],
      valorExento: [''],
      ValorImpuestos: ['']
    });

    this.stocks = [
      
    ];

    this.dataSource = new MatTableDataSource(this.stocks);
  }

  ngOnInit() {
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

  saveCliente(formularioClientes: FormGroup) {

    this.stock = new StockModel(
      this.getNextId(),
      formularioClientes.value.rut,
      formularioClientes.value.nombre,
      formularioClientes.value.apellidoPaterno,
      formularioClientes.value.apellidoMaterno,
      formularioClientes.value.fechaNacimiento,
      formularioClientes.value.nacionalidad,
    );    
    
    this.stockService.saveStock(this.stock);
    
    this.stocks.push(this.stock);
    this.dataSource = new MatTableDataSource(this.stocks);
    formularioClientes.reset();

  }

}
