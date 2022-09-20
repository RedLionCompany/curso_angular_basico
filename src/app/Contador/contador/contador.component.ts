import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> hola bebe como estas? </h1>

        <h1> {{  titulo + '  mmmm' }}</h1>

        <h3> la base es <strong> {{ base }} </strong></h3>

        <button (click) = "acumular(base)"> sumar + {{base}}  </button>


        <span> {{ contador }} </span>

        <button (click) = "acumular(-base)"> restar - {{base}}</button>
    `


})


export class ContadorComponent {
    public titulo : string = 'Segundo curso de angular';
    public contador : number = 0;
    public base : number = 5;
 
 
    acumular( numero : number){
    this.contador += numero;
   }
}