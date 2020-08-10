import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRange][min],[appRange][max],[appRange][min][max]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangeValidatorDirective, multi: true}]
})
export class RangeValidatorDirective implements Validator {
  @Input() min: number;
  @Input() max: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    let min: ValidationErrors;
    let max: ValidationErrors;

    if (this.min) {
      const minValidationFn = Validators.min(this.min);
      min = minValidationFn(control);
    }
    if (this.max) {
      max = Validators.max(this.max)(control);
    }

    let errors: ValidationErrors = null;
    if (min || max) {
      errors = {};
      if (min) {
        errors['min'] = min['min'];
      }
      if (max) {
        errors['max'] = max['max'];
      }
    }
    return errors;
  }

}
