import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitan America';
  nombre2: string = 'juan dAVID RaMiReZ';
  arr:string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', "Groot"];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario:number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/8ZxdDKxS90s';
  activar: boolean = true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  } )

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
       calle: 'Primera',
       casa: 20

    }

  }

}
