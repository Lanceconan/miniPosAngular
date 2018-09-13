import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniPos';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){

    this.matIconRegistry.addSvgIcon(
      "venta",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/venta.svg")
    );
    
    this.matIconRegistry.addSvgIcon(
      "stock",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/stock.svg")
    );
    
    this.matIconRegistry.addSvgIcon(
      "cliente",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/cliente.svg")
    );

  }
}
