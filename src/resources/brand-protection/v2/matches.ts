// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMatches extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'v2', 'matches'] = Object.freeze([
    'brandProtection',
    'v2',
    'matches',
  ] as const);
}
export class Matches extends BaseMatches {}
