// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBookmarks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'bookmarks'] = Object.freeze([
    'zeroTrust',
    'access',
    'bookmarks',
  ] as const);
}
export class Bookmarks extends BaseBookmarks {}
