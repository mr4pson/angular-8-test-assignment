import { Injectable } from '@angular/core';
import { LoginState, LoginStateModel } from '@auth/states';
import { AddPlaceModel } from '@feature/places/models';
import { PoiPlace } from '@feature/shared/models';
import { DataApiService, RpcApiService } from '@feature/shared/services';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';



@Injectable()
export class PlacesService {

  @Select(LoginState) readonly state$: Observable<LoginStateModel>;
  readonly user$ = this.state$.pipe(
    map(state => state.user)
  );

  constructor(private api: DataApiService, private rpc: RpcApiService) { }

  loadPlaces(): Observable<PoiPlace[]> {

    const params = {
      select: '*,creator:users(*),images:place_images(*)'
    };

    return this.user$.pipe(
      switchMap(user => {
        // tslint:disable-next-line:no-string-literal
        return this.api.client.get<PoiPlace[]>('my_business_places', params).pipe(
          map(result => result.body)
        );
      })
    );
  }

  addPlace(data: AddPlaceModel): Observable<string> {

    const request = {
      ...data,
      category: 'places',
      subcategory: null
    } as AddPlaceModel;

    return this.rpc.client.post<{ id: string }>('business/add-place', {}, request).pipe(
      map(response => response.body),
      map(body => body.id)
    );
  }

  // Fixed service to make it work
  getPlace(id: string): Observable<PoiPlace[]> {
    return this.api.client.get<PoiPlace[]>(`my_business_places`, {
      uuid: `eq.${id}`,
      select: '*,creator:users(*),images:place_images(*)'
    }).pipe(
      map(response => response.body)
    );
  }
}
