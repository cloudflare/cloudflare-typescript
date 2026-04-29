// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseConnectivitySettings extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'connectivitySettings'] = Object.freeze([
    'zeroTrust',
    'connectivitySettings',
  ] as const);
}
export class ConnectivitySettings extends BaseConnectivitySettings {}
