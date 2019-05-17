import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { RouterModule, Route } from '@angular/router';
import { ContadorComponent } from './ex3/contador/contador.component';
import { SonumerosDirective } from './ex3/sonumeros.directive';
import { Exercicio3Component } from './ex3/exercicio3/exercicio3.component';

const rotas: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'intro', component: IntroducaoComponent},
  { path: 'bind', component: BindComponent},
  { path: 'diretivas', component: DiretivasComponent},
  { path: 'ex3/:valorInicial', component: Exercicio3Component},
  { path: 'ex3', component: Exercicio3Component},
];

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    DiretivasComponent,
    IntroducaoComponent,
    ContadorComponent,
    SonumerosDirective,
    Exercicio3Component,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
