import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  nombre: string = 'NIColás Trujillo';
  valor: number = 1000;
  obj = {
    nombre:'Nicolas'
  }
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  mostrarNombre(){

    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );

  }

}
