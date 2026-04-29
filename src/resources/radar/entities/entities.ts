// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ASNsAPI from './asns';
import { ASNs, BaseASNs } from './asns';
import * as LocationsAPI from './locations';
import { BaseLocations, Locations } from './locations';

export class BaseEntities extends APIResource {
  static override readonly _key: readonly ['radar', 'entities'] = Object.freeze([
    'radar',
    'entities',
  ] as const);
}
export class Entities extends BaseEntities {
  asns: ASNsAPI.ASNs = new ASNsAPI.ASNs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

Entities.ASNs = ASNs;
Entities.BaseASNs = BaseASNs;
Entities.Locations = Locations;
Entities.BaseLocations = BaseLocations;

export declare namespace Entities {
  export { ASNs as ASNs, BaseASNs as BaseASNs };

  export { Locations as Locations, BaseLocations as BaseLocations };
}
