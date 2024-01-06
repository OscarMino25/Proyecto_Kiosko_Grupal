import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrete',
  templateUrl: './carrete.component.html',
  styleUrl: './carrete.component.css'
})
export class CarreteComponent implements OnInit { constructor(private router: Router){

}

ngOnInit(){
}

navegar(){
  this.router.navigate(['/tipopago']);

}

navegar2(){
  this.router.navigate(['/categorias']);

}



}