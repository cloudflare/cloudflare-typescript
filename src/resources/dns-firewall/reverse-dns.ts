// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseReverseDNS extends APIResource {
  static override readonly _key: readonly ['dnsFirewall', 'reverseDNS'] = Object.freeze([
    'dnsFirewall',
    'reverseDNS',
  ] as const);
}
export class ReverseDNS extends BaseReverseDNS {}
