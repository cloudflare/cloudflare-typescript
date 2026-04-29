// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLocations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'locations'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'locations',
  ] as const);
}
export class Locations extends BaseLocations {}
