import { ReactiveFlightSearchComponent } from './flight-booking/reactive-flight-search/reactive-flight-search.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }

];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES);

