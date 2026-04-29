// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSippy extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'sippy'] = Object.freeze([
    'r2',
    'buckets',
    'sippy',
  ] as const);
}
export class Sippy extends BaseSippy {}
