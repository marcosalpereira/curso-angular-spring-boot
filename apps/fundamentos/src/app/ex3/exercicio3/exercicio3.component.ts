import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit, OnDestroy {

  @Input() contadores: number | undefined;
  sub: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    console.log('destroy')
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit() {
      console.log('init')
      this.sub =  this.route.params.subscribe(params => {
        console.log(params)
        this.contadores = +params.contadores || 2;
      });
  }

}
