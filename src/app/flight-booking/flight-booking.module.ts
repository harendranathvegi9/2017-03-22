import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule
    ],
    declarations: [
        FlightSearchComponent, FlightCardComponent
    ],
    providers: [
        /* z. B. FlightService */
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {

}