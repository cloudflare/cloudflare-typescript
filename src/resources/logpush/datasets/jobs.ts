// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['logpush', 'datasets', 'jobs'] = Object.freeze([
    'logpush',
    'datasets',
    'jobs',
  ] as const);
}
export class Jobs extends BaseJobs {}
