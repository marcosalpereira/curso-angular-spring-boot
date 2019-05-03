import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { RouterModule, Route } from '@angular/router';

const rotas: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'intro', component: IntroducaoComponent},
  { path: 'bind', component: BindComponent},
  { path: 'diretivas', component: DiretivasComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    DiretivasComponent,
    IntroducaoComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
