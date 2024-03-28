// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as EdgeAPI from 'cloudflare/resources/logpush/edge';
import * as JobsAPI from 'cloudflare/resources/logpush/jobs';
import * as OwnershipAPI from 'cloudflare/resources/logpush/ownership';
import * as ValidateAPI from 'cloudflare/resources/logpush/validate';
import * as DatasetsAPI from 'cloudflare/resources/logpush/datasets/datasets';

export class Logpush extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  edge: EdgeAPI.Edge = new EdgeAPI.Edge(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  ownership: OwnershipAPI.Ownership = new OwnershipAPI.Ownership(this._client);
  validate: ValidateAPI.Validate = new ValidateAPI.Validate(this._client);
}

export namespace Logpush {
  export import Datasets = DatasetsAPI.Datasets;
  export import Edge = EdgeAPI.Edge;
  export import InstantLogpushJob = EdgeAPI.InstantLogpushJob;
  export import EdgeGetResponse = EdgeAPI.EdgeGetResponse;
  export import EdgeCreateParams = EdgeAPI.EdgeCreateParams;
  export import EdgeGetParams = EdgeAPI.EdgeGetParams;
  export import Jobs = JobsAPI.Jobs;
  export import JobListResponse = JobsAPI.JobListResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobCreateParams = JobsAPI.JobCreateParams;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
  export import JobListParams = JobsAPI.JobListParams;
  export import JobDeleteParams = JobsAPI.JobDeleteParams;
  export import JobGetParams = JobsAPI.JobGetParams;
  export import Ownership = OwnershipAPI.Ownership;
  export import OwnershipCreateResponse = OwnershipAPI.OwnershipCreateResponse;
  export import OwnershipValidateResponse = OwnershipAPI.OwnershipValidateResponse;
  export import OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export import OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
  export import Validate = ValidateAPI.Validate;
  export import ValidateDestinationResponse = ValidateAPI.ValidateDestinationResponse;
  export import ValidateOriginResponse = ValidateAPI.ValidateOriginResponse;
  export import ValidateDestinationParams = ValidateAPI.ValidateDestinationParams;
  export import ValidateOriginParams = ValidateAPI.ValidateOriginParams;
}
