import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes : string[] = ["IronMan", "Superman", "Mujer Maravilla","Batman","Flash","SpiderMan","Thor"];
  heroeBorrado: string = '';

  constructor() { 
    console.log("001 constructor");
  }

  ngOnInit(): void {
    console.log("002 onInit");
  }

  eliminar():void{
    console.log("borrado");
    this.heroeBorrado = <string>this.heroes.shift();
    console.log(this.heroeBorrado);
    
  }

}
