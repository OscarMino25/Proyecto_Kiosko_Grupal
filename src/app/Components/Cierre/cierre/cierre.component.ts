import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.component.html',
  styleUrl: './cierre.component.css'
})
export class CierreComponent implements OnInit { constructor(private router: Router){

}

ngOnInit(){
}

navegar(){
  this.router.navigate(['/cierre']);

}



}