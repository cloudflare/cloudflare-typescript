// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkersAPI from './workers/workers';
import {
  Worker,
  WorkerCreateParams,
  WorkerDeleteParams,
  WorkerDeleteResponse,
  WorkerEditParams,
  WorkerGetParams,
  WorkerListParams,
  WorkerUpdateParams,
  Workers,
  WorkersV4PagePaginationArray,
} from './workers/workers';

export class Beta extends APIResource {
  workers: WorkersAPI.Workers = new WorkersAPI.Workers(this._client);
}

Beta.Workers = Workers;

export declare namespace Beta {
  export {
    Workers as Workers,
    type Worker as Worker,
    type WorkerDeleteResponse as WorkerDeleteResponse,
    type WorkersV4PagePaginationArray as WorkersV4PagePaginationArray,
    type WorkerCreateParams as WorkerCreateParams,
    type WorkerUpdateParams as WorkerUpdateParams,
    type WorkerListParams as WorkerListParams,
    type WorkerDeleteParams as WorkerDeleteParams,
    type WorkerEditParams as WorkerEditParams,
    type WorkerGetParams as WorkerGetParams,
  };
}
