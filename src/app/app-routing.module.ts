import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CarreteComponent } from './components/carrete/carrete/carrete.component';
import { CierreComponent } from './components/cierre/cierre/cierre.component';
import { CodigoComponent } from './components/codigo/codigo/codigo.component';
import { DescripcionComponent } from './components/descripcion/descripcion/descripcion.component';
import { DetalleComponent } from './components/detalle/detalle/detalle.component';
import { PagotcComponent } from './components/pagotc/pagotc/pagotc.component';
import { TipopagoComponent } from './components/tipopago/tipopago/tipopago.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'carrete', component: CarreteComponent },
  { path: 'cierre', component: CierreComponent },
  { path: 'codigo', component: CodigoComponent },
  { path: 'descripcion', component: DescripcionComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'pagotc', component: PagotcComponent },
  { path: 'tipopago', component: TipopagoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
