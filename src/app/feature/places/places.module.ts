import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '@shared/shared.module';
import { FeatureModule } from '@feature/shared/feature.module';
import { PlacesRoutingModule } from './places-routing.module';

import {
  PlacesPageComponent,
  PlacesToolbarComponent,
  AddDialogComponent,
  AddControlsComponent,
  PlaceItemPageComponent
} from './containers';
import {
  PlacesTableComponent,
  AddPlaceFormComponent
} from './components';

import { PlacesService } from './services';
import { PlacesState, AddPlaceState } from './states';
import { MaterialModule } from 'app/material';
import { PlaceItemDetailsComponent } from './containers/place-item-details/place-item-details.component';
import { PlaceResolverService } from './resolvers/place.resolver';

@NgModule({
  declarations: [
    PlacesPageComponent,
    PlacesTableComponent,
    PlacesToolbarComponent,
    AddDialogComponent,
    AddPlaceFormComponent,
    AddControlsComponent,
    PlaceItemPageComponent,
    PlaceItemDetailsComponent
  ],
  imports: [
    SharedModule,
    FeatureModule,
    MaterialModule,
    PlacesRoutingModule,
    NgxsModule.forFeature([
      PlacesState,
      AddPlaceState
    ])
  ],
  providers: [
    PlacesService,
    PlaceResolverService
  ],
  entryComponents: [
    AddDialogComponent
  ]
})
export class PlacesModule { }
