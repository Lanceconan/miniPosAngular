import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { StockComponent } from './components/stock/stock.component';
import { VentaComponent } from './components/venta/venta.component';
import { MaterialModule } from './material';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IntercomModule } from 'ng-intercom';
import { PruebasComponent, DialogOverviewExampleDialog } from './components/pruebas/pruebas.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { DataUserComponent } from './components/data-user/data-user.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    StockComponent,
    VentaComponent,
    PruebasComponent,
    DialogOverviewExampleDialog,
    HijoComponent,
    DataUserComponent,
    FatherComponent,
    SonComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    IntercomModule.forRoot({
      appId: 'klwzj86j',
      updateOnRouterChange: true
    }),
    FormsModule
  ],
  
  entryComponents: [PruebasComponent, DialogOverviewExampleDialog, SonComponent],
  providers: [appRoutingProviders, FatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
