// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';
import { BaseJobs, Jobs } from './jobs';

export class BaseInstances extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'instances'] = Object.freeze([
    'aiSearch',
    'instances',
  ] as const);
}
export class Instances extends BaseInstances {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Instances.Jobs = Jobs;
Instances.BaseJobs = BaseJobs;

export declare namespace Instances {
  export { Jobs as Jobs, BaseJobs as BaseJobs };
}
