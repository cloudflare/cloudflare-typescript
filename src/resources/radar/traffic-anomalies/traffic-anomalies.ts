// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LocationsAPI from './locations';
import { BaseLocations, Locations } from './locations';

export class BaseTrafficAnomalies extends APIResource {
  static override readonly _key: readonly ['radar', 'trafficAnomalies'] = Object.freeze([
    'radar',
    'trafficAnomalies',
  ] as const);
}
export class TrafficAnomalies extends BaseTrafficAnomalies {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

TrafficAnomalies.Locations = Locations;
TrafficAnomalies.BaseLocations = BaseLocations;

export declare namespace TrafficAnomalies {
  export { Locations as Locations, BaseLocations as BaseLocations };
}
