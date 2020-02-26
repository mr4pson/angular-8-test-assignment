import { Component, OnInit } from '@angular/core';
import { PlacesState, PlacesStateModel } from '@feature/places/states';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-place-item-page',
  templateUrl: './place-item-page.component.html',
  styleUrls: ['./place-item-page.component.scss']
})
export class PlaceItemPageComponent implements OnInit {
  @Select(PlacesState) state$: Observable<PlacesStateModel>;
  readonly place$ = this.state$.pipe(
    map(state => state.places[0])
  );

  constructor() {}

  ngOnInit() {
  }
}
