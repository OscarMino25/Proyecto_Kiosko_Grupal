import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CarreteComponent } from './components/carrete/carrete/carrete.component';
import { CierreComponent } from './components/cierre/cierre/cierre.component';
import { CodigoComponent } from './components/codigo/codigo/codigo.component';
import { DescripcionComponent } from './components/descripcion/descripcion/descripcion.component';
import { DetalleComponent } from './components/detalle/detalle/detalle.component';
import { PagotcComponent } from './components/pagotc/pagotc/pagotc.component';
import { TipopagoComponent } from './components/tipopago/tipopago/tipopago.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriasComponent,
    CarreteComponent,
    CierreComponent,
    CodigoComponent,
    DescripcionComponent,
    DetalleComponent,
    PagotcComponent,
    TipopagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
