// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdgeAPI from './edge';
import {
  BaseEdge,
  Edge,
  EdgeCreateParams,
  EdgeGetParams,
  InstantLogpushJob,
  InstantLogpushJobsSinglePage,
} from './edge';
import * as JobsAPI from './jobs';
import {
  BaseJobs,
  JobCreateParams,
  JobDeleteParams,
  JobDeleteResponse,
  JobGetParams,
  JobListParams,
  JobUpdateParams,
  Jobs,
  LogpushJob,
  LogpushJobsSinglePage,
  OutputOptions,
} from './jobs';
import * as OwnershipAPI from './ownership';
import {
  BaseOwnership,
  Ownership,
  OwnershipCreateParams,
  OwnershipCreateResponse,
  OwnershipValidateParams,
  OwnershipValidation,
} from './ownership';
import * as ValidateAPI from './validate';
import {
  BaseValidate,
  Validate,
  ValidateDestinationExistsParams,
  ValidateDestinationExistsResponse,
  ValidateDestinationParams,
  ValidateDestinationResponse,
  ValidateOriginParams,
  ValidateOriginResponse,
} from './validate';
import * as DatasetsAPI from './datasets/datasets';
import { BaseDatasets, Datasets } from './datasets/datasets';

export class BaseLogpush extends APIResource {
  static override readonly _key: readonly ['logpush'] = Object.freeze(['logpush'] as const);
}
export class Logpush extends BaseLogpush {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  edge: EdgeAPI.Edge = new EdgeAPI.Edge(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  ownership: OwnershipAPI.Ownership = new OwnershipAPI.Ownership(this._client);
  validate: ValidateAPI.Validate = new ValidateAPI.Validate(this._client);
}

Logpush.Datasets = Datasets;
Logpush.BaseDatasets = BaseDatasets;
Logpush.Edge = Edge;
Logpush.BaseEdge = BaseEdge;
Logpush.Jobs = Jobs;
Logpush.BaseJobs = BaseJobs;
Logpush.Ownership = Ownership;
Logpush.BaseOwnership = BaseOwnership;
Logpush.Validate = Validate;
Logpush.BaseValidate = BaseValidate;

export declare namespace Logpush {
  export { Datasets as Datasets, BaseDatasets as BaseDatasets };

  export {
    Edge as Edge,
    BaseEdge as BaseEdge,
    type InstantLogpushJob as InstantLogpushJob,
    type InstantLogpushJobsSinglePage as InstantLogpushJobsSinglePage,
    type EdgeCreateParams as EdgeCreateParams,
    type EdgeGetParams as EdgeGetParams,
  };

  export {
    Jobs as Jobs,
    BaseJobs as BaseJobs,
    type LogpushJob as LogpushJob,
    type OutputOptions as OutputOptions,
    type JobDeleteResponse as JobDeleteResponse,
    type LogpushJobsSinglePage as LogpushJobsSinglePage,
    type JobCreateParams as JobCreateParams,
    type JobUpdateParams as JobUpdateParams,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
    type JobGetParams as JobGetParams,
  };

  export {
    Ownership as Ownership,
    BaseOwnership as BaseOwnership,
    type OwnershipValidation as OwnershipValidation,
    type OwnershipCreateResponse as OwnershipCreateResponse,
    type OwnershipCreateParams as OwnershipCreateParams,
    type OwnershipValidateParams as OwnershipValidateParams,
  };

  export {
    Validate as Validate,
    BaseValidate as BaseValidate,
    type ValidateDestinationResponse as ValidateDestinationResponse,
    type ValidateDestinationExistsResponse as ValidateDestinationExistsResponse,
    type ValidateOriginResponse as ValidateOriginResponse,
    type ValidateDestinationParams as ValidateDestinationParams,
    type ValidateDestinationExistsParams as ValidateDestinationExistsParams,
    type ValidateOriginParams as ValidateOriginParams,
  };
}
