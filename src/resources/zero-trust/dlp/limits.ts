// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLimits extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'limits'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'limits',
  ] as const);
}
export class Limits extends BaseLimits {}
