import { CustomPreloadingStrategy } from './preload/custom-preloading-strategy';
import { AsyncCityValidationDirective } from './validation/async-city.validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip.validation.directive';
import { CityValidationDirective } from './validation/city.validation.directive';
import { CityPipe } from './pipes/city.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ],
    providers: [
        CustomPreloadingStrategy
    ],
    exports: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ]
})
export class SharedModule {
}