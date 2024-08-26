// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as BulkOperationsAPI from './bulk-operations';

export class BulkOperations extends APIResource {
  /**
   * Gets the current status of an asynchronous operation on a list.
   *
   * The `status` property can have one of the following values: `pending`,
   * `running`, `completed`, or `failed`. If the status is `failed`, the `error`
   * property will contain a message describing the error.
   */
  get(accountIdentifier: string, operationId: string, options?: Core.RequestOptions): Core.APIPromise<BulkOperationGetResponse | null> {
    return (this._client.get(`/accounts/${accountIdentifier}/rules/lists/bulk_operations/${operationId}`, options) as Core.APIPromise<{ result: BulkOperationGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The current status of the asynchronous operation.
 */
export type OperationStatus = 'pending' | 'running' | 'completed' | 'failed'

export type BulkOperationGetResponse = Array<unknown>

export namespace BulkOperations {
  export import OperationStatus = BulkOperationsAPI.OperationStatus;
  export import BulkOperationGetResponse = BulkOperationsAPI.BulkOperationGetResponse;
}
