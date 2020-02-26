import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-item-details',
  templateUrl: './place-item-details.component.html',
  styleUrls: ['./place-item-details.component.scss']
})
export class PlaceItemDetailsComponent implements OnInit {
  @Input() place$: Observable<Data> = new Observable();
  constructor(
  ) { }

  ngOnInit() {
  }

}
