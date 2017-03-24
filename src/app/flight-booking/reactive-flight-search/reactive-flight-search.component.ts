import { CityValidator } from './../../shared/validation/reactive/city.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from './../../entities/flight';
import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

// Eventuell in main.ts verschieben
import 'rxjs/add/operator/map';

@Component({
    selector: 'reactive-flight-search',
    templateUrl: './reactive-flight-search.component.html',
    styleUrls: ['./reactive-flight-search.component.css'],
    providers: [FlightService]
})
export class ReactiveFlightSearchComponent {

    filter: FormGroup;

    flights: Array<Flight> = [];
    selectedFlight: Flight;

    basket = {
        "3": true,
        "4": false,
        "5": true
    };

    /*
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }
    */
    constructor(
        private fb: FormBuilder,
        private flightService: FlightService) {


            this.filter = fb.group({
                from: [
                    'Graz',
                    [
                        Validators.required,
                        Validators.minLength(3),
                        Validators.pattern("[A-Za-z\-öäüßÖÄÜ]*"),
                        Validators.maxLength(30),
                        CityValidator.validateWithParams(['Graz', 'Hamburg', 'Nürnberg', 'München'])
                    ]
                ],
                to: [
                    'Hamburg'
                ]
            });

            this.filter.valueChanges.subscribe(all => {
                console.debug('Alle Formularfelder', all);
            })

            this.filter.controls['from'].valueChanges.subscribe(from => {
                console.debug('from',from);
            })

    }


    search(): void {

        let from = this.filter.value.from;
        // from = this.filter.controls['from'].value;
        let to = this.filter.value.to;

        this.flightService
            .find(from, to)
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                }

            ); 
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }


}