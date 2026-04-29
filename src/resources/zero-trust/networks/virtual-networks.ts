// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseVirtualNetworks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'virtualNetworks'] = Object.freeze([
    'zeroTrust',
    'networks',
    'virtualNetworks',
  ] as const);
}
export class VirtualNetworks extends BaseVirtualNetworks {}
