import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

    private _personajes : Personaje[] = [
        {
          nombre: 'Goku',
          poder: 293000
        },
        {
          nombre: 'Vegeta',
          poder: 230000
        }
      ];

      get personajes():Personaje[]{
        return [...this._personajes];
      }

    constructor(){
        console.log("Servicio DbzService");
    }


    agregarPersonajes(personaje: Personaje){
        this._personajes.push(personaje);
    }

}