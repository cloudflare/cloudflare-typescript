// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRatePlans extends APIResource {
  static override readonly _key: readonly ['zones', 'ratePlans'] = Object.freeze([
    'zones',
    'ratePlans',
  ] as const);
}
export class RatePlans extends BaseRatePlans {}
