import { BASE_URL } from './app.tokens';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('Test', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        FlightBookingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: BASE_URL, useValue: ''}
      ]
    });
  }));

  it('null is not undefined', () => {
    expect(null).not.toBe(undefined);
  });

 it('true is not false', async(() => {
    expect(true).not.toBe(false);
  }));

});
