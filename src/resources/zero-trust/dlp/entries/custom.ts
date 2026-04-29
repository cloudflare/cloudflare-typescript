// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseCustom extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'entries', 'custom'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'entries',
    'custom',
  ] as const);
}
export class Custom extends BaseCustom {}
