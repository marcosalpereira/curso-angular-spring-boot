import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-reactive',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ReactiveEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      salario: this.formBuilder.control(''),
    });
  }

  submit(): void {
    console.log(this.form.status);
    console.log(this.form.value);
  }

}
