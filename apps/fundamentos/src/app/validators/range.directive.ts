import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
@Directive({
  selector: '[appRange][min][max]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangeValidatorDirective, multi: true}]
})
export class RangeValidatorDirective implements Validator {
  @Input() min: number;
  @Input() max: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return {
      ...Validators.min(this.min)(control),
      ...Validators.max(this.max)(control)
    };
  }

}
