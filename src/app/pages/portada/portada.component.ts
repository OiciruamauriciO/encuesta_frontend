import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent {

  public titulo: string;
  
  constructor() {
    this.titulo = "";
   }
}
