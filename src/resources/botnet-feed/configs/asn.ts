// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseASN extends APIResource {
  static override readonly _key: readonly ['botnetFeed', 'configs', 'asn'] = Object.freeze([
    'botnetFeed',
    'configs',
    'asn',
  ] as const);
}
export class ASN extends BaseASN {}
