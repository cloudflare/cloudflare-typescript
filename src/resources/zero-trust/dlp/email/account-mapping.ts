// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseAccountMapping extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'email', 'accountMapping'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'email',
    'accountMapping',
  ] as const);
}
export class AccountMapping extends BaseAccountMapping {}
