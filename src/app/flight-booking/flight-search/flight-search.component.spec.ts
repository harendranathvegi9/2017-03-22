import { SharedModule } from './../../shared/shared.module';
import { FlightCardComponent } from './flight-card.component';
import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';


describe('Test', () => {

  beforeEach(async(() => {

    let flightService = {
      flights: [],
      find(from: string, to: string): void {
        this.flights.push(
          { id: 815, from: 'Graz', to: 'Flagranti', date: '2017-12-24'}
        );
      }
    };

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterModule,
        FormsModule,
        CommonModule,
        SharedModule


      ],
      declarations: [
        FlightSearchComponent,
        FlightCardComponent
      ],
      providers: [
        {provide: FlightService, useValue: flightService}
      ]
    });

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [{provide: FlightService, useValue: flightService}] 
      }
    });

  }));

  it('should not load flights without from and/or to', () => {
    
    	let fixture = TestBed.createComponent(FlightSearchComponent);
      let comp = fixture.componentInstance;
      // fixture.debugElement   // Wrapper um das DOM
      // fixture.nativeElement; // DOM

      comp.to = null;
      comp.from = null;

      comp.search();

      expect(comp.flights.length).toBe(0);

  });


  it('should  load flights with from and to', () => {
    
    	let fixture = TestBed.createComponent(FlightSearchComponent);
      let comp = fixture.componentInstance;
      // fixture.debugElement   // Wrapper um das DOM
      // fixture.nativeElement; // DOM

      comp.to = "Graz";
      comp.from = "Flagranti";

      comp.search();

      expect(comp.flights.length).toBe(1);

  });


});
