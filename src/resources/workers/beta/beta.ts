// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkersAPI from './workers/workers';
import { BaseWorkers, Workers } from './workers/workers';

export class BaseBeta extends APIResource {
  static override readonly _key: readonly ['workers', 'beta'] = Object.freeze(['workers', 'beta'] as const);
}
export class Beta extends BaseBeta {
  workers: WorkersAPI.Workers = new WorkersAPI.Workers(this._client);
}

Beta.Workers = Workers;
Beta.BaseWorkers = BaseWorkers;

export declare namespace Beta {
  export { Workers as Workers, BaseWorkers as BaseWorkers };
}
