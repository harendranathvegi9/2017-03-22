import { FlightService } from './flight.service';
import { Flight } from './../../entities/flight';
import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

// Eventuell in main.ts verschieben
import 'rxjs/add/operator/map';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: [FlightService]
})
export class FlightSearchComponent {

    from: string;
    to: string;
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
    constructor(private flightService: FlightService) {
    }


    search(): void {

        this.flightService
            .find(this.from, this.to)
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