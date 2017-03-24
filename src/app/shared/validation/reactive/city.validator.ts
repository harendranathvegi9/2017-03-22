import { AbstractControl } from '@angular/forms';

export class CityValidator {

    static validate(c: AbstractControl): any {
        if (c.value === 'Graz' || c.value === 'Hamburg' ) {
            return {};
        }
        return { city: true };
    }

    static validateWithParams(allowedCities: string[]): any {

        return (c: AbstractControl): any => {
            if (allowedCities.indexOf(c.value) > -1) {
                return {};
            }
            return {city: true}
        }

    }
}

/*
export function validate() {

}
*/