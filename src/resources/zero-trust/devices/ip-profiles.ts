// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIPProfiles extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'ipProfiles'] = Object.freeze([
    'zeroTrust',
    'devices',
    'ipProfiles',
  ] as const);
}
export class IPProfiles extends BaseIPProfiles {}
