import { Component, OnInit } from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html'
})
export class ServicosComponent implements OnInit {
  valor: number;

  constructor(
    private servico: ServicoService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.valor = ++this.servico.contador;
  }

}
