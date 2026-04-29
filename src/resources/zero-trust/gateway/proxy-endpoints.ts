// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseProxyEndpoints extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'proxyEndpoints'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'proxyEndpoints',
  ] as const);
}
export class ProxyEndpoints extends BaseProxyEndpoints {}
