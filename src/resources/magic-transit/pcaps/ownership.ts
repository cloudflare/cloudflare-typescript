// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOwnership extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'pcaps', 'ownership'] = Object.freeze([
    'magicTransit',
    'pcaps',
    'ownership',
  ] as const);
}
export class Ownership extends BaseOwnership {}
