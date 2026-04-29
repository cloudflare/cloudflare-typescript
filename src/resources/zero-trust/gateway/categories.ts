// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'categories'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'categories',
  ] as const);
}
export class Categories extends BaseCategories {}
