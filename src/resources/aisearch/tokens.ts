// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTokens extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'tokens'] = Object.freeze([
    'aiSearch',
    'tokens',
  ] as const);
}
export class Tokens extends BaseTokens {}
