import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { ContadorComponent } from './ex3/contador/contador.component';
import { SonumerosDirective } from './ex3/sonumeros.directive';
import { Exercicio3Component } from './ex3/exercicio3/exercicio3.component';
import { ParPipe } from './pipes/par.pipe';
import { PipesComponent as PipesComponent } from './pipes/pipes/pipes.component';
import { AppRoutingModule } from './rotas/app-routing.module';
import { RotasComponent } from './rotas/rotas.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    DiretivasComponent,
    IntroducaoComponent,
    ContadorComponent,
    SonumerosDirective,
    Exercicio3Component,
    ParPipe,
    PipesComponent,
    RotasComponent,
    ServicosComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
