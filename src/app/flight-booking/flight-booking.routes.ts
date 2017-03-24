import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Routes, RouterModule } from '@angular/router';


const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'reactive-flight-search',
        component: ReactiveFlightSearchComponent
    },

];

export const FlightBookingRoutesModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);