import { BASE_URL } from './app.tokens';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
