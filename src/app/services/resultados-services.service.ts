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
    this.fullPathResultadosTodos = `${environment.baseEndpoint}/${this.principalPath}/${this.subPath}`;
  }

  getEncuestas(): Observable<Resultadostodos> {
    return this.http.get(this.fullPathResultadosTodos).pipe((response) => response, (error: any) => error);
  }  
}
