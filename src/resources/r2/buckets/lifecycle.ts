// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLifecycle extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'lifecycle'] = Object.freeze([
    'r2',
    'buckets',
    'lifecycle',
  ] as const);
}
export class Lifecycle extends BaseLifecycle {}
