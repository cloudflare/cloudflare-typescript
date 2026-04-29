// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EdgeAPI from './edge';
import { Edge } from './edge';
import * as JobsAPI from './jobs';
import { Jobs } from './jobs';
import * as OwnershipAPI from './ownership';
import { Ownership } from './ownership';
import * as ValidateAPI from './validate';
import { Validate } from './validate';
import * as DatasetsAPI from './datasets/datasets';
import { Datasets } from './datasets/datasets';

export class Logpush extends APIResource {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  edge: EdgeAPI.Edge = new EdgeAPI.Edge(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  ownership: OwnershipAPI.Ownership = new OwnershipAPI.Ownership(this._client);
  validate: ValidateAPI.Validate = new ValidateAPI.Validate(this._client);
}

Logpush.Datasets = Datasets;
Logpush.Edge = Edge;
Logpush.Jobs = Jobs;
Logpush.Ownership = Ownership;
Logpush.Validate = Validate;

export declare namespace Logpush {
  export { Datasets as Datasets };

  export { Edge as Edge };

  export { Jobs as Jobs };

  export { Ownership as Ownership };

  export { Validate as Validate };
}
