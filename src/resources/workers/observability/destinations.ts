// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDestinations extends APIResource {
  static override readonly _key: readonly ['workers', 'observability', 'destinations'] = Object.freeze([
    'workers',
    'observability',
    'destinations',
  ] as const);
}
export class Destinations extends BaseDestinations {}
