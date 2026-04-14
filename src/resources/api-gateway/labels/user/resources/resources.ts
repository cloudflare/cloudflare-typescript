// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as OperationAPI from './operation';
import { Operation, OperationUpdateParams, OperationUpdateResponse } from './operation';

export class Resources extends APIResource {
  operation: OperationAPI.Operation = new OperationAPI.Operation(this._client);
}

Resources.Operation = Operation;

export declare namespace Resources {
  export {
    Operation as Operation,
    type OperationUpdateResponse as OperationUpdateResponse,
    type OperationUpdateParams as OperationUpdateParams,
  };
}
