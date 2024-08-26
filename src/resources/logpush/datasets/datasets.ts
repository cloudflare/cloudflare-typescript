// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Fields } from './fields';
import { Jobs } from './jobs';
import * as FieldsAPI from './fields';
import * as JobsAPI from './jobs';

export class Datasets extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

export namespace Datasets {
  export import Fields = FieldsAPI.Fields;
  export import FieldGetResponse = FieldsAPI.FieldGetResponse;
  export import FieldGetParams = FieldsAPI.FieldGetParams;
  export import Jobs = JobsAPI.Jobs;
  export import JobGetResponse = JobsAPI.JobGetResponse;
  export import JobGetParams = JobsAPI.JobGetParams;
}
