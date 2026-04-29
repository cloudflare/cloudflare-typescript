// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseFailover extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector', 'failover'] =
    Object.freeze(['zeroTrust', 'tunnels', 'warpConnector', 'failover'] as const);
}
export class Failover extends BaseFailover {}
