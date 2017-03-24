import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        FlightSearchComponent, 
        FlightCardComponent,
        ReactiveFlightSearchComponent
    ],
    providers: [
        /* z. B. FlightService */
    ],
    exports: [
        FlightSearchComponent,
        ReactiveFlightSearchComponent
    ]
})
export class FlightBookingModule {

}