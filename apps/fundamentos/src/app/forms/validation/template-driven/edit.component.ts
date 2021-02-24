import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Turma } from 'src/app/model/turma';

@Component({
  selector: 'app-validation-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ValidationEditComponent implements OnInit {

  turma: Turma = {};

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.turma);
  }

}
