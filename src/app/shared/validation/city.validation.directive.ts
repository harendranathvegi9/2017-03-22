import { CityValidator } from './reactive/city.validator';
import { Directive, Input, OnChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

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
export class CityValidationDirective implements Validator, OnChanges  {

    @Input() city: string;
    @Input() strictValidation: boolean;

    valFn: ValidatorFn;

    ngOnChanges() {
        let validCities = this.city.split(',');
        let valFn = CityValidator.validateWithParams(validCities);
        this.valFn = valFn;
    }

    validate(c: AbstractControl): any { 
        return this.valFn(c);

        /*
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
        */
    }

}