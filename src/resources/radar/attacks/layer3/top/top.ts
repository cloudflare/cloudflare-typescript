// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as LocationsAPI from './locations';
import { BaseLocations, Locations } from './locations';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer3', 'top'] = Object.freeze([
    'radar',
    'attacks',
    'layer3',
    'top',
  ] as const);
}
export class Top extends BaseTop {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

Top.Locations = Locations;
Top.BaseLocations = BaseLocations;

export declare namespace Top {
  export { Locations as Locations, BaseLocations as BaseLocations };
}
