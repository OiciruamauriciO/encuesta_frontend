import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-regresar',
  templateUrl: './boton-regresar.component.html',
  styleUrls: ['./boton-regresar.component.css']
})
export class BotonRegresarComponent {
  
  public tituloBoton: string;

  constructor() {
    this.tituloBoton = "";
   }

}
