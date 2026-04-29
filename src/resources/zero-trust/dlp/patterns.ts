// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePatterns extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'patterns'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'patterns',
  ] as const);
}
export class Patterns extends BasePatterns {}
