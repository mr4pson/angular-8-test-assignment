import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceItemDetailsComponent } from './place-item-details.component';

describe('PlaceItemDetailsComponent', () => {
  let component: PlaceItemDetailsComponent;
  let fixture: ComponentFixture<PlaceItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
