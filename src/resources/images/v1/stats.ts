// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseStats extends APIResource {
  static override readonly _key: readonly ['images', 'v1', 'stats'] = Object.freeze([
    'images',
    'v1',
    'stats',
  ] as const);
}
export class Stats extends BaseStats {}
