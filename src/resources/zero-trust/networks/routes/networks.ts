// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseNetworks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'routes', 'networks'] = Object.freeze([
    'zeroTrust',
    'networks',
    'routes',
    'networks',
  ] as const);
}
export class Networks extends BaseNetworks {}
