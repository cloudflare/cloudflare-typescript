// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as OperationAPI from './operation';
import { BaseOperation, Operation, OperationUpdateParams, OperationUpdateResponse } from './operation';

export class BaseResources extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels', 'managed', 'resources'] = Object.freeze([
    'apiGateway',
    'labels',
    'managed',
    'resources',
  ] as const);
}
export class Resources extends BaseResources {
  operation: OperationAPI.Operation = new OperationAPI.Operation(this._client);
}

Resources.Operation = Operation;
Resources.BaseOperation = BaseOperation;

export declare namespace Resources {
  export {
    Operation as Operation,
    BaseOperation as BaseOperation,
    type OperationUpdateResponse as OperationUpdateResponse,
    type OperationUpdateParams as OperationUpdateParams,
  };
}
