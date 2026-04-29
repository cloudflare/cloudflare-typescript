// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from './operations';
import { BaseOperations, Operations } from './operations';

export class BaseDiscovery extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'discovery'] = Object.freeze([
    'apiGateway',
    'discovery',
  ] as const);
}
export class Discovery extends BaseDiscovery {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
}

Discovery.Operations = Operations;
Discovery.BaseOperations = BaseOperations;

export declare namespace Discovery {
  export { Operations as Operations, BaseOperations as BaseOperations };
}
