import { BASE_URL } from './../../app.tokens';
import { Flight } from './../../entities/flight';
import { Headers, URLSearchParams, Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string) {
    }

    flights: Flight[] = [];

    find(from: string, to: string): void {

        let url = this.baseUrl + '/api/flight';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        this
            .http
            .get(url, { headers, search })
            .map(resp => resp.json())
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (err) => {
                    console.error('Fehler beim Laden', err);
                }
            );


    }

}