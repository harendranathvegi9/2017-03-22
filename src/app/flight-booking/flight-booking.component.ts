import { FlightService } from './flight-search/flight.service';
import { FlightBookingModule } from './flight-booking.module';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flight-FlightBookingModule',
    templateUrl: './flight-booking.component.html',
    providers: [FlightService]
})
export class FlightBookingComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}