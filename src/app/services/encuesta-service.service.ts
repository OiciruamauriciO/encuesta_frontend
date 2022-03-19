import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { EncuestaToPostInterface } from '../core/interfaces/encuesta-to-post-interface';
import { EncuestaInterface } from '../core/interfaces/encuesta-interface';
import { MaxIdEncuestaInterface } from '../core/interfaces/max-id-encuesta-interface';

@Injectable({
  providedIn: 'root'
})
export class EncuestaServiceService {

  private pathEncuestas: string;
  private fullPathEncuestas: string;
  private pathUpdate: string;
  private fullPathVotoEstilo: string;
  private pathInsertInto: string;
  private fullPathEncuestaEstilo: string;

  constructor(private http: HttpClient) { 
    this.pathEncuestas = "encuestas";
    this.fullPathEncuestas = `${environment.baseEndpoint}/${this.pathEncuestas}`;
    this.pathUpdate = "resultados/updateVoto";
    this.fullPathVotoEstilo = `${environment.baseEndpoint}/${this.pathUpdate}`;
    this.pathInsertInto = "encuestasestilos";
    this.fullPathEncuestaEstilo = `${environment.baseEndpoint}/${this.pathUpdate}`;
  } 

  getEncuestas(): Observable<EncuestaInterface> {
    return this.http.get(this.fullPathEncuestas).pipe((response) => response, (error: any) => error);
  }     

  async postNewEncuesta(encuestaToPostInterface: EncuestaToPostInterface): Promise<Observable<any>>{
      
    let body = JSON.stringify(encuestaToPostInterface);    
    let parametros = new HttpParams();
    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      params: parametros
    };
    
    return this.http.post<any>(this.fullPathEncuestas, body, opciones);
  }

  async updateVotoEstilo(idEstilo: number): Promise<Observable<any>>{
    let body = "";
    const parametros = new HttpParams()
    .set('estilo', idEstilo);
    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      params: parametros
    };
    return this.http.post<any>(this.fullPathVotoEstilo, body, opciones);
  } 

  getIdEncuestaUltimo(): Observable<MaxIdEncuestaInterface> {
    return this.http.get("http://localhost:8084/api/encuestas/idultimo").pipe((response: any) => response, (error: any) => error);
  }     

  async insertIntoEncuestaEstiloDirecto(aEncuesta: number, aEstilo: number): Promise<Observable<any>>{ 
      
    let body = "";
    const parametros = new HttpParams();
    const opciones = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      params: parametros
    };
    
    return this.http.post<any>("http://localhost:8084/api/encuestasestilos?fkEncuestaEstiloEncuesta="+aEncuesta+"&fkEncuestaEstiloEstilo="+aEstilo, body, opciones);
  }

}
