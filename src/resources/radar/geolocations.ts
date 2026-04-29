// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseGeolocations extends APIResource {
  static override readonly _key: readonly ['radar', 'geolocations'] = Object.freeze([
    'radar',
    'geolocations',
  ] as const);
}
export class Geolocations extends BaseGeolocations {}
