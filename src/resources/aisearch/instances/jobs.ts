// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'instances', 'jobs'] = Object.freeze([
    'aiSearch',
    'instances',
    'jobs',
  ] as const);
}
export class Jobs extends BaseJobs {}
