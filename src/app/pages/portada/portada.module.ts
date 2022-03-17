import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortadaRoutingModule } from './portada-routing.module';
import { PortadaComponent } from './portada.component';

@NgModule({
  declarations: [
    PortadaComponent
  ],
  imports: [
    CommonModule,
    PortadaRoutingModule
  ]
})
export class PortadaModule { }
