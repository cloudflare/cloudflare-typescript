// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseCustom extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'domains', 'custom'] = Object.freeze([
    'r2',
    'buckets',
    'domains',
    'custom',
  ] as const);
}
export class Custom extends BaseCustom {}
