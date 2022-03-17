import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Resultadostodos } from '../core/interfaces/resultadostodos'

@Injectable({
  providedIn: 'root'
})
export class ResultadosServicesService {

  principalPath = 'resultados';
  subPath = 'todos';
  fullPathResultadosTodos: string = '';

  constructor(private http: HttpClient) { 
    console.log('[EncuestaServiceService] Constructor');
    this.fullPathResultadosTodos = `${environment.baseEndpoint}/${this.principalPath}/${this.subPath}`;
    console.log(this.fullPathResultadosTodos);
  }

  getEncuestas(): Observable<Resultadostodos> {
    console.log('[EncuestaServiceService][getEncuestas] Inicio'); 
    return this.http.get(this.fullPathResultadosTodos).pipe((response) => response, (error: any) => error);
  }  
}
