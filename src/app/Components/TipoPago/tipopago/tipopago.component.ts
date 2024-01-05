import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipopago',
  templateUrl: './tipopago.component.html',
  styleUrl: './tipopago.component.css'
})
export class TipopagoComponent implements OnInit { constructor(private router: Router){

}

ngOnInit(){
}

navegar(){
  this.router.navigate(['/pagotc']);

}

navegar2(){
  this.router.navigate(['/codigo']);

}


}