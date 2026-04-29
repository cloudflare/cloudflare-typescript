// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseIPSECTunnels extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'ipsecTunnels'] = Object.freeze([
    'magicTransit',
    'ipsecTunnels',
  ] as const);
}
export class IPSECTunnels extends BaseIPSECTunnels {}
