import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'portada', loadChildren: () => import('./pages/portada/portada.module').then(m => m.PortadaModule)},
  { path: 'encuesta', loadChildren: () => import('./pages/encuesta/encuesta.module').then(m => m.EncuestaModule)},
  { path: 'resultados', loadChildren: () => import('./pages/resultados/resultados.module').then(m => m.ResultadosModule)},
  { path: 'acercade', loadChildren: () => import('./pages/acercade/acercade.module').then(m => m.AcercadeModule)},
  { path: '', redirectTo:'/portada', pathMatch:'full'},
  { path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
