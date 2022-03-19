import { Component } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {

  public titulo: string;

  constructor() { 
    this.titulo = "";
  }

}
