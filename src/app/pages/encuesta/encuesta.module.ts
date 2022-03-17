import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaRoutingModule } from './encuesta-routing.module';
import { EncuestaComponent } from './encuesta.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EncuestaModule { }
