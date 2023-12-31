import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  constructor(private router: Router){

  }

  ngOnInit(){
  }

  navegar(){
    this.router.navigate(['/categorias']);

  }



}
