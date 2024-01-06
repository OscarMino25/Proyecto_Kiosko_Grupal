import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnInit {

  @ViewChild('numeroCelularInput') numeroCelularInput!: ElementRef;
  @ViewChild('tecladoVirtual', { static: false }) tecladoVirtual!: ElementRef;

  mostrarTecladoVirtual: boolean = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // Llamar a posicionarTecladoVirtual aquí podría ser más seguro
    this.posicionarTecladoVirtual();
  }

  navegar() {
    this.router.navigate(['/cierre']);
  }

  navegar2() {
    this.router.navigate(['/tipopago']);
  }

  onFocus() {
    this.mostrarTecladoVirtual = true;
  }

  onBlur() {
    this.mostrarTecladoVirtual = false;
  }

  posicionarTecladoVirtual() {
    if (this.numeroCelularInput && this.numeroCelularInput.nativeElement) {
      const inputElement = this.numeroCelularInput.nativeElement as HTMLInputElement;
  
      if (this.tecladoVirtual && this.tecladoVirtual.nativeElement) {
        const tecladoElement = this.tecladoVirtual.nativeElement as HTMLElement;
        const inputRect = inputElement.getBoundingClientRect();
  
        const topPosition = inputRect.top + inputRect.height + window.scrollY;
        const leftPosition = inputRect.left + window.scrollX;
  
        this.renderer.setStyle(tecladoElement, 'top', `${topPosition}px`);
        this.renderer.setStyle(tecladoElement, 'left', `${leftPosition}px`);
      } else {
        console.error("Error: tecladoVirtual o su propiedad nativeElement no están definidos correctamente.");
      }
    } else {
      console.error("Error: numeroCelularInput o su propiedad nativeElement no están definidos correctamente.");
    }
  }
  agregarNumero(numero: string) {
    console.log("Agregando número:", numero);
    const inputElement = this.numeroCelularInput.nativeElement as HTMLInputElement;
    inputElement.value += numero;
  }
}