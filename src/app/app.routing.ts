//Se importan las bases y funcionalidades de angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VentaComponent } from './components/venta/venta.component';
import { StockComponent } from './components/stock/stock.component';

//Se importan componentes


//se definen las rutas
const appRotes: Routes = [
    {path : '', component : ClienteComponent},
    {path : 'cliente', component : ClienteComponent},
    {path : 'venta', component : VentaComponent},
    {path : 'stock', component : StockComponent}
];

//utilizar configuración de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRotes);