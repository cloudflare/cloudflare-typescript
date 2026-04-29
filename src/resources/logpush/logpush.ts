// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdgeAPI from './edge';
import { BaseEdge, Edge } from './edge';
import * as JobsAPI from './jobs';
import { BaseJobs, Jobs } from './jobs';
import * as OwnershipAPI from './ownership';
import { BaseOwnership, Ownership } from './ownership';
import * as ValidateAPI from './validate';
import { BaseValidate, Validate } from './validate';
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

  export { Edge as Edge, BaseEdge as BaseEdge };

  export { Jobs as Jobs, BaseJobs as BaseJobs };

  export { Ownership as Ownership, BaseOwnership as BaseOwnership };

  export { Validate as Validate, BaseValidate as BaseValidate };
}
