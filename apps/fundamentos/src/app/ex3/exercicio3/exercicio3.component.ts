import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {
  valorInicial = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const valorNaRota = this.route.snapshot.paramMap.get('valorInicial');
    this.valorInicial = +valorNaRota;
  }

}
