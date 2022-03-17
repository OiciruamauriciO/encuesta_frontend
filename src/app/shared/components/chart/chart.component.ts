import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Resultadostodos } from '../../../core/interfaces/resultadostodos';
import { ResultadosServicesService } from '../../../services/resultados-services.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{

  public title: String;
  public highcharts: any;
  public datoComunicar: Resultadostodos;
  public arregloObjetos: any[];

  constructor(private resultadoService: ResultadosServicesService) { 
    this.title = "RESULTADOS";
    this.highcharts = Highcharts;
    this.datoComunicar =  {
      data: [{
          nombreEstilo: "",
          totalVotosPorEstilo: -1 
        },]
    };
    this.arregloObjetos = [];
  }
  async ngOnInit() {

    console.log('[ChartComponent][ngOnInit] Inicio');
    await (this.resultadoService.getEncuestas()).toPromise().then((response) => {
      if(response!=undefined){
        this.datoComunicar = response;
      }
      
    }).catch((e: any) => console.error(e));

    this.graficoBarrasResultadosEncuesta(this.datoComunicar);
  }

  desplegarObjetos(obj: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }, objName: any) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
        console.log(obj[i]);
        this.arregloObjetos.push(obj[i]);
      }
    }
    return result;
  }
  

  graficoBarrasResultadosEncuesta(paraGraficar: Resultadostodos) {
    const result = this.desplegarObjetos(paraGraficar, 'paraGraficar'); 
    
    this.highcharts.chart('resultadosGrafico', {
      chart: {
        type: 'bar',
        height: 480,
        width: 320,
        inverted: true,
        backgroundColor: '',
        annotations:[
        ]
      },
      colors:[
        'rgba(88, 84, 180, 0.9)'
      ],
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Estilos'],        
        visible: false
      },
      yAxis: {
        min: 0,
        visible: false,
        title: {
          text: 'Votos',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: ' votos'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false
          },
          colors:[''],
          borderColor: ""
        }
      },
      series: [{
        type: undefined,
        name: 'Rock',
        color: "#0cf04a",
        data: [this.arregloObjetos[0]["totalVotosPorEstilo"]]
      }, {
        type: undefined,
        name: 'Pop',
        color: "#0c40f0",
        data: [this.arregloObjetos[1]["totalVotosPorEstilo"]]
      }, {
        type: undefined,
        name: 'Jazz',
        color: "#f00cb2", 
        data: [this.arregloObjetos[2]["totalVotosPorEstilo"]]
      }]
    });
  }
}
