import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/model/turma';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  turma: Turma;

  constructor() { }

  ngOnInit(): void {
    this.turma = {};
  }

  submit(): void {
    console.log(this.turma);
  }

}
