// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseZones extends APIResource {
  static override readonly _key: readonly ['addressing', 'addressMaps', 'zones'] = Object.freeze([
    'addressing',
    'addressMaps',
    'zones',
  ] as const);
}
export class Zones extends BaseZones {}
