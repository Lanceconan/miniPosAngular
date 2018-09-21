import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../../models/ClienteModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VentaService } from '../../services/venta.service';
import { ClienteService } from '../../services/cliente.service';
import { StockService } from '../../services/stock.service';
import { StockModel } from '../../models/StockModel';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
  providers: [VentaService, ClienteService, StockService]
})
export class VentaComponent implements OnInit {

  cliente: ClienteModel;
  filteredClients: Observable<ClienteModel[]>;
  formularioCliente: FormGroup;

  stock: StockModel;
  stocks: Array<StockModel>;
  filteredStock: Observable<StockModel[]>;
  formularioStock: FormGroup;

  displayedColumnsStock: string[] = ['Nombre', 'Descripción', 'Cantidad', 'Valor Exento', 'Valor Impuestos', 'Valor Total', 'Acciones'];
  dataSourceStock: MatTableDataSource<StockModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  total: number;
  totalImpuestos: number;
  totalExento: number;
  cantidad: number;

  constructor(
    private formCliente: FormBuilder,
    private formStock: FormBuilder,
    private ventaServices: VentaService,
    private clienteServices: ClienteService,
    private stockServices: StockService
  ) {

    this.dataSourceStock = new MatTableDataSource(this.stocks);

    this.formularioCliente = this.formCliente.group({
      cliente: ['']
    });

    this.formularioStock = this.formStock.group({
      stock: ['']
    });


    this.setValues(
      0,
      0,
      0,
      0
    );

  }



  ngOnInit() {

    this.dataSourceStock.paginator = this.paginator;
    this.dataSourceStock.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Item por Página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';

    this.dataSourceStock = new MatTableDataSource(this.stocks);

    /*this.filteredClients = this.formularioCliente.get('cliente').valueChanges.pipe(debounceTime(500), switchMap(
      q => this.clienteServices.get(q).pipe(map(x => x))
    ));*/
  }

  setValues(
    total: number,
    totalImpuestos: number,
    totalExento: number,
    cantidad: number
  ): any {
    this.total = total;
    this.totalImpuestos = totalImpuestos;
    this.totalExento = totalExento;
    this.cantidad = cantidad;
  }

  focusInput() {

  }

  applyFilter(filterValue: string) {
    this.dataSourceStock.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceStock.paginator) {
      this.dataSourceStock.paginator.firstPage();
    }
  }

  deleteStock(id: number) {
    console.log('Se borrará: ' + id);
    this.stocks.splice(id - 1, 1);
    this.dataSourceStock = new MatTableDataSource(this.stocks);
  }


}
