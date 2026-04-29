// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseGatewayCA extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'gatewayCA'] = Object.freeze([
    'zeroTrust',
    'access',
    'gatewayCA',
  ] as const);
}
export class GatewayCA extends BaseGatewayCA {}
