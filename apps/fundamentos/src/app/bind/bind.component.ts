import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent {
  valor = 1;
  dobrar() {
    this.valor += this.valor;
  }
}
