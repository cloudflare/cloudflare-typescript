// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EdgeAPI from './edge';
import * as JobsAPI from './jobs';
import * as OwnershipAPI from './ownership';
import * as ValidateAPI from './validate';
import * as DatasetsAPI from './datasets/datasets';

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
  export type InstantLogpushJob = EdgeAPI.InstantLogpushJob;
  export type EdgeGetResponse = EdgeAPI.EdgeGetResponse;
  export type EdgeCreateParams = EdgeAPI.EdgeCreateParams;
  export type EdgeGetParams = EdgeAPI.EdgeGetParams;
  export import Jobs = JobsAPI.Jobs;
  export type LogpushJob = JobsAPI.LogpushJob;
  export type OutputOptions = JobsAPI.OutputOptions;
  export type JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import LogpushJobsSinglePage = JobsAPI.LogpushJobsSinglePage;
  export type JobCreateParams = JobsAPI.JobCreateParams;
  export type JobUpdateParams = JobsAPI.JobUpdateParams;
  export type JobListParams = JobsAPI.JobListParams;
  export type JobDeleteParams = JobsAPI.JobDeleteParams;
  export type JobGetParams = JobsAPI.JobGetParams;
  export import Ownership = OwnershipAPI.Ownership;
  export type OwnershipValidation = OwnershipAPI.OwnershipValidation;
  export type OwnershipCreateResponse = OwnershipAPI.OwnershipCreateResponse;
  export type OwnershipCreateParams = OwnershipAPI.OwnershipCreateParams;
  export type OwnershipValidateParams = OwnershipAPI.OwnershipValidateParams;
  export import Validate = ValidateAPI.Validate;
  export type ValidateDestinationResponse = ValidateAPI.ValidateDestinationResponse;
  export type ValidateOriginResponse = ValidateAPI.ValidateOriginResponse;
  export type ValidateDestinationParams = ValidateAPI.ValidateDestinationParams;
  export type ValidateOriginParams = ValidateAPI.ValidateOriginParams;
}
