// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseHealth extends APIResource {
  static override readonly _key: readonly ['loadBalancers', 'pools', 'health'] = Object.freeze([
    'loadBalancers',
    'pools',
    'health',
  ] as const);
}
export class Health extends BaseHealth {}
