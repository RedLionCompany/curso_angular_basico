import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    nombre : string = 'Ironman';
    edad : number = 23

    get nombreCapitalizado () {
        return this.nombre.toUpperCase();
    }


    generarNombre(){
        return `${this.nombre} -  ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Superman';
    }

    cambiarEdad():void{
        console.log('cambiarEdad');
        this.edad = 26
    }

}