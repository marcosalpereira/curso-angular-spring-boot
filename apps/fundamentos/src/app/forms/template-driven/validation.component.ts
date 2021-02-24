import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Turma } from 'src/app/model/turma';

@Component({
  selector: 'app-edit-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class EditValidationComponent implements OnInit {

  turma: Turma = {};

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.turma);
  }

}
