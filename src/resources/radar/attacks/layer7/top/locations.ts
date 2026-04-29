// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseLocations extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7', 'top', 'locations'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
    'top',
    'locations',
  ] as const);
}
export class Locations extends BaseLocations {}
