// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseToken extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector', 'token'] = Object.freeze([
    'zeroTrust',
    'tunnels',
    'warpConnector',
    'token',
  ] as const);
}
export class Token extends BaseToken {}
