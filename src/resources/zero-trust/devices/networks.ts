// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseNetworks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'networks'] = Object.freeze([
    'zeroTrust',
    'devices',
    'networks',
  ] as const);
}
export class Networks extends BaseNetworks {}
