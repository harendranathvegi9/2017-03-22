import { Flight } from './../../entities/flight';
import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

// Eventuell in main.ts verschieben
import 'rxjs/add/operator/map';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    /*
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }
    */
    constructor(private http: Http) {
    }


    search(): void {

        let url = 'http://www.angular.at/api/flight';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);

        this
            .http
            .get(url, { headers, search })
            .map(resp => resp.json())
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