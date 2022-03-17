import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { ChartComponent } from '../../shared/components/chart/chart.component';

@NgModule({
  declarations: [
    ResultadosComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    HttpClientModule
  ]
})
export class ResultadosModule { }
