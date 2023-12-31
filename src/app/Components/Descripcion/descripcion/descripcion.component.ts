import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent implements OnInit { constructor(private router: Router){

}

ngOnInit(){
}

navegar(){
  this.router.navigate(['/detalle']);

}



}