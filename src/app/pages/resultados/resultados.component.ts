import { Component } from '@angular/core';
import { ResultadosServicesService } from '../../services/resultados-services.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  providers: [
    ResultadosServicesService
  ]
})
export class ResultadosComponent {

  public tituloResultados: string;

  constructor( ) { 
    this.tituloResultados = "";
  }  
}
