import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { IntroducaoComponent } from '../introducao/introducao.component';
import { BindComponent } from '../bind/bind.component';
import { DiretivasComponent } from '../diretivas/diretivas.component';
import { PipesComponent } from '../pipes/pipes/pipes.component';
import { Exercicio3Component } from '../ex3/exercicio3/exercicio3.component';
import { RotasComponent } from './rotas.component';

const rotas: Route[] = [
  // { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'intro', component: IntroducaoComponent},
  { path: 'bind', component: BindComponent},
  { path: 'diretivas', component: DiretivasComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'ex3/:contadores', component: Exercicio3Component},
  { path: 'ex3', component: Exercicio3Component},
  // { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(rotas, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
