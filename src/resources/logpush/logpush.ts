// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as JobsAPI from 'cloudflare/resources/logpush/jobs';
import * as DatasetsAPI from 'cloudflare/resources/logpush/datasets/datasets';

export class Logpush extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

export namespace Logpush {
  export import Datasets = DatasetsAPI.Datasets;
  export import Jobs = JobsAPI.Jobs;
  export import JobRetrieveResponse = JobsAPI.JobRetrieveResponse;
  export import JobUpdateResponse = JobsAPI.JobUpdateResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
}
