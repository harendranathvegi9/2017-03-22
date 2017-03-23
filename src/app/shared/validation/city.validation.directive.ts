import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: 'input[city]', // <input ort ...>
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator  {

    @Input() city: string;
    @Input() strictValidation: boolean;

    validate(c: AbstractControl): any { 
        let validCities = this.city.split(',');
        
        if (validCities.indexOf(c.value) > -1) {
            return {};
        }

        return {
            city: {
                strictValidation: this.strictValidation,
                reason: 42,
                tryAgain: 2019,
                current: c.value
            }
        }
    }

}