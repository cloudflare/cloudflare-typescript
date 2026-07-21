// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as JobsAPI from './jobs';
import {
  BaseJobs,
  JobCreateParams,
  JobCreateResponse,
  JobExportParams,
  JobExportResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesV4PagePaginationArray,
  Jobs,
} from './jobs';

export class BaseRemediations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'remediations'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'remediations',
  ] as const);
}
export class Remediations extends BaseRemediations {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Remediations.Jobs = Jobs;
Remediations.BaseJobs = BaseJobs;

export declare namespace Remediations {
  export {
    Jobs as Jobs,
    BaseJobs as BaseJobs,
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobExportResponse as JobExportResponse,
    type JobListResponsesV4PagePaginationArray as JobListResponsesV4PagePaginationArray,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobExportParams as JobExportParams,
  };
}
