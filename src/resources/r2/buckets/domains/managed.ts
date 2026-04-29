// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseManaged extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'domains', 'managed'] = Object.freeze([
    'r2',
    'buckets',
    'domains',
    'managed',
  ] as const);
}
export class Managed extends BaseManaged {}
