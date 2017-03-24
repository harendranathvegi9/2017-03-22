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
    providers: []
})
export class FlightSearchComponent {

    from: string = "Hamburg";
    to: string = "Graz";
    // flights: Array<Flight> = [];
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

    // let fs = comp.flights
    get flights() {
        return this.flightService.flights;
    }

    search(): void {

        this.flightService.find(this.from, this.to);
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }


}