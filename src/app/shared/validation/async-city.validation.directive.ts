import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: 'input[asyncCity]', // <input ort ...>
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncCityValidationDirective,
            multi: true
        }
    ]
})
export class AsyncCityValidationDirective implements Validator  {

    validate(c: AbstractControl): Promise<any> { 

        return new Promise<any>((resolve: Function) => {
            // ASYNC
            // http.get(...)
            setTimeout(() => {
                resolve({ /*asyncCity: true*/ });
            }, 300);
        });

    }

}