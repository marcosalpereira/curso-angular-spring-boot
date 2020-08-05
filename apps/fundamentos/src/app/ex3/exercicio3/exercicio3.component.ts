import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  @Input() contadores: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.contadores = +params.contadores || 2;
      });
  }

}
