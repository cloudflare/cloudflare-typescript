// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLocks extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'locks'] = Object.freeze([
    'r2',
    'buckets',
    'locks',
  ] as const);
}
export class Locks extends BaseLocks {}
