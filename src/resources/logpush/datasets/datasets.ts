// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FieldsAPI from './fields';
import { BaseFields, FieldGetParams, FieldGetResponse, Fields } from './fields';
import * as JobsAPI from './jobs';
import { BaseJobs, JobGetParams, Jobs } from './jobs';

export class BaseDatasets extends APIResource {
  static override readonly _key: readonly ['logpush', 'datasets'] = Object.freeze([
    'logpush',
    'datasets',
  ] as const);
}
export class Datasets extends BaseDatasets {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Datasets.Fields = Fields;
Datasets.BaseFields = BaseFields;
Datasets.Jobs = Jobs;
Datasets.BaseJobs = BaseJobs;

export declare namespace Datasets {
  export {
    Fields as Fields,
    BaseFields as BaseFields,
    type FieldGetResponse as FieldGetResponse,
    type FieldGetParams as FieldGetParams,
  };

  export { Jobs as Jobs, BaseJobs as BaseJobs, type JobGetParams as JobGetParams };
}
