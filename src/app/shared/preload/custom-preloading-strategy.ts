import { Observable } from 'rxjs/Rx';
import { PreloadingStrategy, Route } from '@angular/router'
//import 'rxjs/add/operator/of';
import 'rxjs/Rx';

export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // return fn();
        // return Observable.of(true).delay(7000).flatMap(f => fn());

        if (route.data['preload']) {
            return fn();
        }
        return Observable.of(null);

    }


}