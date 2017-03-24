import { FlightBookingComponent } from './flight-booking.component';
import { FlightService } from './flight-search/flight.service';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingRoutesModule } from './flight-booking.routes';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        ReactiveFormsModule,
        FlightBookingRoutesModule
    ],
    declarations: [
        FlightSearchComponent, 
        FlightCardComponent,
        ReactiveFlightSearchComponent,
        PassengerSearchComponent,
        FlightEditComponent,
        FlightBookingComponent
    ],
    providers: [
        // FlightService
    ],
    exports: [
        FlightSearchComponent,
        ReactiveFlightSearchComponent
    ]
})
export class FlightBookingModule {

}