import { CustomPreloadingStrategy } from './shared/preload/custom-preloading-strategy';
import { ReactiveFlightSearchComponent } from './flight-booking/reactive-flight-search/reactive-flight-search.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const APP_ROUTES: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
        data: {
            preload: false
        }
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

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES, {
    // useHash: true
    enableTracing: true,
    preloadingStrategy: CustomPreloadingStrategy
});

