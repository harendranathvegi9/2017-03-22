import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    constructor(private http: Http) {
        console.debug('CityPipe ctor');
    }

    transform(value: any, fmt: string): any {

        let long, short;

        switch(value){
            case "Hamburg":
                long = "Airport Hamburg Fuhlsbüttel Helmut Schmidt";
                short = "HAM";
                break;
            case "Graz":
                long = "Flughafen Graz Thalerhof";
                short = "GRZ";
                break;
            case "Nürnberg":
                long = "Airport Nürnberg Albrecht Dürer";
                short = "NUE";
                break;
            default:
                long = short = "ROM";
        }

        if (fmt == 'long') return long;
        return short;

    }

}