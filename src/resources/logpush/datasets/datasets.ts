// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/logpush/datasets/fields';
import * as JobsAPI from 'cloudflare/resources/logpush/datasets/jobs';

export class Datasets extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

export namespace Datasets {
  export import Fields = FieldsAPI.Fields;
  export import FieldListResponse = FieldsAPI.FieldListResponse;
  export import FieldListParams = FieldsAPI.FieldListParams;
  export import Jobs = JobsAPI.Jobs;
  export import JobListResponse = JobsAPI.JobListResponse;
  export import JobListParams = JobsAPI.JobListParams;
}
