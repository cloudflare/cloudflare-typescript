// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSearches extends APIResource {
  static override readonly _key: readonly ['loadBalancers', 'searches'] = Object.freeze([
    'loadBalancers',
    'searches',
  ] as const);
}
export class Searches extends BaseSearches {}
