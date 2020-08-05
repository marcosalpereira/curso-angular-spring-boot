import { ContadorService } from './../contador.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  @Input() nome: string;

  novoValor: number;

  constructor(private contador: ContadorService) { }

  ngOnInit() {
  }

  get valor(): number {
    return this.contador.valor;
  }

  incrementarValor() {
    this.contador.incrementar();
  }

  alterarValor() {
    this.contador.valor = this.novoValor;
  }
}
