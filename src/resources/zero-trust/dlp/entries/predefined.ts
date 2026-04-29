// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BasePredefined extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'entries', 'predefined'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'entries',
    'predefined',
  ] as const);
}
export class Predefined extends BasePredefined {}
