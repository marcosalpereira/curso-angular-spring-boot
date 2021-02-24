import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducaoComponent } from '../introducao/introducao.component';
import { BindComponent } from '../bind/bind.component';
import { DiretivasComponent } from '../diretivas/diretivas.component';
import { PipesComponent } from '../pipes/pipes/pipes.component';
import { Exercicio3Component } from '../ex3/exercicio3/exercicio3.component';
import { ReactiveEditComponent } from '../forms/reactive/edit.component';
import { ReactiveEditValidationComponent } from '../forms/reactive/validation.component';
import { EditComponent } from '../forms/template-driven/edit.component';
import { EditValidationComponent } from '../forms/template-driven/validation.component';

const rotas: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'intro', component: IntroducaoComponent},
  { path: 'bind', component: BindComponent},
  { path: 'diretivas', component: DiretivasComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'ex3/:contadores', component: Exercicio3Component},
  { path: 'ex3', component: Exercicio3Component},

  { path: 'forms-template-driven-edit', component: EditComponent},
  { path: 'forms-template-driven-edit-validation', component: EditValidationComponent},
  { path: 'forms-reactive-edit', component: ReactiveEditComponent},
  { path: 'forms-reactive-edit-validation', component: ReactiveEditValidationComponent},
  // { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(rotas, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
