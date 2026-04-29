// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseCAs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'applications', 'cas'] = Object.freeze([
    'zeroTrust',
    'access',
    'applications',
    'cas',
  ] as const);
}
export class CAs extends BaseCAs {}
