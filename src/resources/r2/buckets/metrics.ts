// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMetrics extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'metrics'] = Object.freeze([
    'r2',
    'buckets',
    'metrics',
  ] as const);
}
export class Metrics extends BaseMetrics {}
