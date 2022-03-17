import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ResultadosServicesService } from '../../services/resultados-services.service';
import { Resultadostodos } from '../../core/interfaces/resultadostodos';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  providers: [
    ResultadosServicesService
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private resultadoService: ResultadosServicesService) { 
  }  
  ngOnInit() {  
    console.log('[ResultadosComponent][ngOnInit] Inicio');
  }

}
