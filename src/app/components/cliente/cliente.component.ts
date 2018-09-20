import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/ClienteModel';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  formularioClientes: FormGroup;
  cliente: ClienteModel;
  clientes: Array<ClienteModel>;

  displayedColumns: string[] = ['Rut', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Fecha de Nacimiento', 'Nacionalidad'];
  dataSource: MatTableDataSource<ClienteModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {

    this.formularioClientes = this.formBuilder.group({
      rut: [''],
      nombre: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nacionalidad: [''],
      fechaNacimiento: ['']
    });

    this.clientes = [
      new ClienteModel(1, '17339126-9', 'daniel', 'gutierrez', 'pizarro', new Date(), 'chilena'),
      new ClienteModel(1, '17339126-9', 'daniel', 'gutierrez', 'pizarro', new Date(), 'chilena'),
      new ClienteModel(1, '17339126-9', 'daniel', 'gutierrez', 'pizarro', new Date(), 'chilena'),
      new ClienteModel(2, '18864783-9', 'aaron', 'presley', 'dark', new Date(), 'gringa')
    ];

    this.dataSource = new MatTableDataSource(this.clientes);

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
    return this.clientes.length + 1;
  }

  saveCliente(formularioClientes: FormGroup) {

    this.cliente = new ClienteModel(
      this.getNextId(),
      formularioClientes.value.rut,
      formularioClientes.value.nombre,
      formularioClientes.value.apellidoPaterno,
      formularioClientes.value.apellidoMaterno,
      formularioClientes.value.fechaNacimiento,
      formularioClientes.value.nacionalidad,
    );    
    
    this.clienteService.saveCliente(this.cliente);
    
    this.clientes.push(this.cliente);
    this.dataSource = new MatTableDataSource(this.clientes);
    formularioClientes.reset();

  }

}
