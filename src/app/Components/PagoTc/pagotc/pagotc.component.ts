import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagotc',
  templateUrl: './pagotc.component.html',
  styleUrl: './pagotc.component.css'
})
export class PagotcComponent implements OnInit { constructor(private router: Router){

}

ngOnInit(){
}

navegar(){
  this.router.navigate(['/codigo']);

}

navegar2(){
  this.router.navigate(['/tipopago']);

}



}