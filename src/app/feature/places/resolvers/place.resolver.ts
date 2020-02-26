import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { PlacesService } from '../services';
import { Store } from '@ngxs/store';
import * as actions from '@feature/places/actions';
import { PoiPlace } from '@feature/shared/models';

@Injectable({
    providedIn: 'root'
})  
export class PlaceResolverService implements Resolve<any> {
    constructor(
        private api: PlacesService,
        private store: Store
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        const id = route.params.id;
        this.api.getPlace(id).pipe(
            catchError((error) => {
                return empty();
            })
        ).subscribe((data: PoiPlace[]) => {
            const storeInstance = new actions.Store(data);
            this.store.dispatch(storeInstance);
        });
        
        
    }
}