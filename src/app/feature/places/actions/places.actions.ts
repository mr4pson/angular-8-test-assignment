import { PoiPlace } from '@feature/shared/models/places.model';

export class Load {
  static readonly type = '[Places] Load';
  constructor() { }
}

export class Store {
    static readonly type = '[Place] Store';
    constructor(public payload: PoiPlace[]) {}
}  