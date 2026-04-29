// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTags extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'tags'] = Object.freeze([
    'zeroTrust',
    'access',
    'tags',
  ] as const);
}
export class Tags extends BaseTags {}
