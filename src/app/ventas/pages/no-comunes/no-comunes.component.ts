import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string  = "Nicolás"
  genero: string  = 'masculino';
  isMale: boolean = true;

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes: string[]      = ['Maria','Pedro','Juan'];
  resetClientesList: string[] = [...this.clientes];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    "=1" : 'Tenemos 1 cliente esperando',
    "=2": 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando'
  }

  constructor(){}

  cambiarNombre(): void {
    if ( !this.isMale ) {
      this.nombre = 'Nicolás';
      this.genero = 'masculino';
      this.isMale = true;
    } else {
      this.nombre = 'Adriana';
      this.genero = 'femenino';
      this.isMale = false;
    }
  }

  borrarCliente() {
    //this.clientes.splice(0,1);
    this.clientes.pop()
  }

  resetClientes() {
    this.clientes = [...this.resetClientesList];
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Nicolás',
    edad: 35,
    direccion: 'Barranquilla, Atlantico'
  }
  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise( (res,reject) => {
    setTimeout(() => {
      res('Tenemos data de promesa')
    }, 3500);

  } );
}
