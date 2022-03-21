import { Component } from '@angular/core';
import { EncuestaServiceService } from '../../services/encuesta-service.service';
import { EncuestaToPostInterface } from '../../core/interfaces/encuesta-to-post-interface';
import { EncuestaInterface } from '../../core/interfaces/encuesta-interface';
import { MaxIdEncuestaInterface } from '../../core/interfaces/max-id-encuesta-interface';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [
    EncuestaServiceService
  ]
})
export class EncuestaComponent {  

  public ngOptions = ["","Rock","Pop","Jazz"];
  public ngDropdown = this.ngOptions[0];
  public newEncuesta: EncuestaToPostInterface = {
    estilo: 0,
    correo: ""
  };
  public booleanResPost: boolean;
  public booleanEPost: boolean;
  public booleanResUpdate: boolean;
  public booleanEUpdatePost: boolean;
  public resPost: any;
  public ePost: any;
  public resUpdate: any;
  public eUpdate: any;  
  public correoInput: string;
  public estiloInput: string;
  public eGetEncuestasError: any;
  public booleanErrorGetEncuestasPost: any;
  public allEncuestas: EncuestaInterface = {
    data: [{
      idEncuesta: 0,
      estilo: 0,
      correo: ""
    },]    
  };
  public maxIdEncuestaInterface: MaxIdEncuestaInterface = {
    idencuesta: 0
  }
  public selectEstilo: any;
  public arregloObjetosEncuesta: EncuestaInterface[] = [];
  public arregloStringEncuestas: any[] = [];
  public idEncuestaUltimo: number;
  public responseConverted: any;
  public arregloresponseConverted: any;
  public temporalSubElemento: any;
  public arregloSubElemento: any[] = [];
  public temporalEstilo: any;
  public mensajeVacios: string;

  constructor(private encuestaService: EncuestaServiceService) { 
    this.correoInput = "";
    this.estiloInput = "";
    this.booleanResPost = false;
    this.booleanEPost = false;
    this.booleanResUpdate = false;
    this.booleanEUpdatePost = false;
    this.idEncuestaUltimo = 0;
    this.temporalEstilo = 0;
    this.mensajeVacios = " ";
  }

  async callPostEncuesta(){
    (await this.encuestaService.postNewEncuesta(this.newEncuesta)).subscribe((res: any) => {  
      this.resPost = res;            
      this.booleanResPost = true;                       
    }, (e: any) => {
      this.ePost = e;
      this.booleanEPost = true;   
    });      
  }

  async callUpdateVotoEstilo() {
    (await this.encuestaService.updateVotoEstilo(this.temporalEstilo)).subscribe((res: any) => {  
      this.resUpdate = res;            
      this.booleanResUpdate = true;
    }, (e: any) => {
      this.eUpdate = e;
      this.booleanEUpdatePost = true; 
    });  

  }

  async callToEncuestaEstiloEntity() {
    (this.encuestaService.getEncuestas()).subscribe(async (response) => {

      if(response!=undefined){
        this.allEncuestas = response;
        this.responseConverted = JSON.stringify(this.allEncuestas);
        this.arregloresponseConverted=this.responseConverted.split(",");

        for(let i=0; i<this.arregloresponseConverted.length; i++){
          if(i==this.arregloresponseConverted.length-3  ){
            this.temporalSubElemento = this.arregloresponseConverted[i];
          }
        }

        this.arregloSubElemento = this.temporalSubElemento.split(":");

        for(let j=0; j<this.arregloSubElemento.length; j++){

          if(j==this.arregloSubElemento.length-1){
            this.idEncuestaUltimo = this.arregloSubElemento[j];

            (await this.encuestaService.insertIntoEncuestaEstiloDirecto(this.idEncuestaUltimo, this.temporalEstilo)).subscribe((res: any) => {  
              this.resUpdate = res;            
              this.booleanResUpdate = true;                       
            }, (e: any) => {
              this.eUpdate = e;
              this.booleanEUpdatePost = true;   
            });              

            break;
          }
        }
      }
    }, (e: any) => {
      this.eGetEncuestasError = e;
      this.booleanErrorGetEncuestasPost = true;   
    });  
  }

  async saveEncuesta(){
    
    if((this.estiloInput==="" || this.estiloInput===" ") && (this.correoInput==="" || this.correoInput===" ")){
      this.mensajeVacios = "Los campos no pueden estar vacíos";
    }else{
      this.asignacionEstiloSegunEntrada();
      this.callPostEncuesta();
      this.callUpdateVotoEstilo();
      this.callToEncuestaEstiloEntity();    
      this.limpiarCamposFormulario();
      this.mensajeVacios="";
    }
        
  }       

  limpiarCamposFormulario(){
    this.estiloInput="";
    this.correoInput="";
  }

  asignacionEstiloSegunEntrada(){

    if(this.estiloInput==="Rock"){
      this.temporalEstilo = 1;
    }else if(this.estiloInput==="Pop"){
      this.temporalEstilo = 2;
    }else if(this.estiloInput==="Jazz"){
      this.temporalEstilo = 3;
    }else{
      this.estiloInput = "error";// forzaría un JSON parse error: Cannot deserialize value of type `int` from String "error"
      this.temporalEstilo = -1;
    }

    this.newEncuesta.correo = this.correoInput;
    this.newEncuesta.estilo = this.temporalEstilo;
  }

}


