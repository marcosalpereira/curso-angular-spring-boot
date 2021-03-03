import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  @Input() contadores: number | undefined;
  sub: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      console.log('init')
      this.route.params.subscribe( (params) => {
        // this.contadores = +params.contadores;
        // if (!this.contadores) {
        //   this.contadores = 2;
        // }
        this.contadores = +params.contadores || 2;
      });
  }



}

