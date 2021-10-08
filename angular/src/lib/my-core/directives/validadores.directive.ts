import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function UppercaseValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) { return null; }
      return control.value === control.value.toUpperCase() ? null : { uppercase: 'Tiene que estar en mayusculas' }
  };
}

@Directive({
  selector: '[uppercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UppercaseValidator, multi: true }]
})
export class UppercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return UppercaseValidation()(control);
  }
}

export const MIS_VALIDADORES = [ UppercaseValidator ]
