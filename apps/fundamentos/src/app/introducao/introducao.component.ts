import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css']
})
export class IntroducaoComponent implements OnInit {

  titulo = 'Curso Angular Básico';
  subtitulo = '??';

  ngOnInit() {
    this.subtitulo = '?';
  }

  onClick() {
    this.subtitulo = 'Construção de uma aplicação';
  }
}
