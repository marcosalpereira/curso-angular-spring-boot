import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-reactive',
  templateUrl: './edit-reactive.component.html',
  styleUrls: ['./edit-reactive.component.css']
})
export class EditReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      salario: this.formBuilder.control('', [Validators.required, Validators.max(5000), Validators.min(1000)]),
    });
  }

  submit(): void {
    console.log(this.form.status);
    console.log(this.form.value);
  }

}
