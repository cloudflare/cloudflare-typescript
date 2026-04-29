// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AsesAPI from './ases';
import { Ases, BaseAses } from './ases';
import * as LocationsAPI from './locations';
import { BaseLocations, Locations } from './locations';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7', 'top'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
    'top',
  ] as const);
}
export class Top extends BaseTop {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
}

Top.Locations = Locations;
Top.BaseLocations = BaseLocations;
Top.Ases = Ases;
Top.BaseAses = BaseAses;

export declare namespace Top {
  export { Locations as Locations, BaseLocations as BaseLocations };

  export { Ases as Ases, BaseAses as BaseAses };
}
