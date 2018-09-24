import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { StockComponent } from './components/stock/stock.component';
import { VentaComponent } from './components/venta/venta.component';
import { MaterialModule } from './material';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IntercomModule } from 'ng-intercom';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    StockComponent,
    VentaComponent
    
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
    })
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
