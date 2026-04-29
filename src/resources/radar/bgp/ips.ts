// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIPs extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'ips'] = Object.freeze([
    'radar',
    'bgp',
    'ips',
  ] as const);
}
export class IPs extends BaseIPs {}
