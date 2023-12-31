import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit { constructor(private router: Router){

}

ngOnInit(){
}

navegar(){
  this.router.navigate(['/carrete']);

}



}