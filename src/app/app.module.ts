import { HomeComponent } from './home/home.component';
import { AppRoutesModule } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CityPipe } from './shared/pipes/city.pipe';
import { BASE_URL } from './app.tokens';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlightBookingModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
