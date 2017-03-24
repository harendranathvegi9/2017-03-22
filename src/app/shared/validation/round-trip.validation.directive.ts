import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
    selector: 'form[roundTrip]', // <input ort ...>
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RoundTripValidationDirective,
            multi: true
        }
    ]
})
export class RoundTripValidationDirective implements Validator  {

    validate(c: AbstractControl): any { 
        let group = c as FormGroup;

        let fromCtrl = group.controls['from'];
        let toCtrl = group.controls['to'];

        if (!fromCtrl || !toCtrl) return { };

        if (fromCtrl.value == toCtrl.value) return { roundTrip: true };

        return { };
    }

}